const bcrypt = require('bcryptjs')
const AuthModel = require('../../model/auth')
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const storeInfo = require('../../model/storeInfo');
const { sendNotification } = require('../Notification');


class Auth {

    static async register(req, res) {
        try {
            const { firstName } = req.body;
            const newUser = await AuthModel(req.body);

            await newUser.save()
            res.redirect('/login')
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;
        console.log(email)


        try {
            const user = await AuthModel.findOne({ email });
            const store = await storeInfo.find({ userid: user._id });

            await sendNotification(`${email} user Login`, user._id)


            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                return res.status(401).send('Invalid username or password');
            }

            const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });

            // Set the token as a cookie
            res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
            res.cookie('user', user);
            res.cookie('store', store);

            // Redirect to '/'
            res.redirect('/');

        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }


    static async updateUser(req, res) {
        try {
            const userId = req.cookies.user._id;
            const { firstName, lastName, email, country } = req.body;


            const AuthUser = await AuthModel.findByIdAndUpdate(userId, { firstName, lastName, email, country }, { new: true })

            if (!AuthUser) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(AuthUser);

        } catch (error) {

        }
    }


    static async forgetPassword(req, res) {
        const { email, password } = req.body;
        console.log(email)
        console.log(password)
        try {
            // Hash the new password
            const hashedNewPassword = await bcrypt.hash(password, 10);
    
            // Update the password in the database
            await AuthModel.findOneAndUpdate({ email }, { password: hashedNewPassword });
    
            res.status(200).send('Your password has been changed successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    




    static async logout(req, res) {
        try {
            // Clear the authentication token cookie
            res.clearCookie('token');

            // Clear any other user-related cookies (if applicable)
            res.clearCookie('user');
            res.clearCookie('store');

            // Redirect to the login page or any other desired destination
            res.redirect('/login');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }



    static async getUser(req, res) {
        try {
            const users = await AuthModel.find().populate('storeDetail')
                .populate('userOrderHistory')
                .populate('userProducts');
            res.send(users)
        } catch (error) {

        }
    }


}

module.exports = Auth;