const express = require('express');
const bankAccountModel = require('../../model/bankAccount');
const authModel = require('../../model/auth');
const csurf = require('csurf');



const route = express.Router();


route.post('/create-bank-account', async function (req, res) {
    try {
        const { id, bankName, bankNumber, accountNumber } = req.body;
        const userId = req.cookies.user._id;

        console.log(userId)

      
       
        let user = await authModel.findById(id);

        if (!user) {
           
            user = new authModel({ _id: id });
        }

        // Check if user already has a bank account
        let existingBankAccount = await bankAccountModel.findOne({ userId: id });

        if (existingBankAccount) {
            // If bank account exists, update it
            existingBankAccount.bankName = bankName;
            existingBankAccount.bankNumber = bankNumber;
            existingBankAccount.AccountNumber = accountNumber;
            await existingBankAccount.save();
        } else {
            // If bank account doesn't exist, create a new one
            const newBankAccount = new bankAccountModel({
                userId: userId,
                bankName: bankName,
                bankNumber: bankNumber,
                AccountNumber: accountNumber
            });
            await newBankAccount.save();
        }

        // Redirect to setting page
        res.redirect('/setting');
    } catch (error) {
        console.error(error);
        res.redirect('/setting');
    }
});









module.exports = route;