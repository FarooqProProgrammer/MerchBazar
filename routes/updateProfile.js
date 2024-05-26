const express = require('express');
const router = express.Router();
const BankAccount = require('../model/bankAccount');
const authModel = require('../model/auth')

// Route to create a bank account
router.post('/update-profile', async (req, res) => {
    try {
        const { userId, bankName, bankNumber, accountNumber } = req.body;

        // Create a new bank account document
        const bankAccount = new BankAccount({
            userId,
            bankName,
            bankNumber,
            accountNumber
        });

        // Save the bank account document
        await bankAccount.save();

        res.status(201).json({ message: 'Bank account created successfully', bankAccount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
