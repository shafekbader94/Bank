const express = require("express");
const router = express.Router();

const Transaction = require('../model/transaction')

router.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find({})
    res.send(transactions)
})


router.post('/transaction', async (req, res) => {
    const newTransaction = new Transaction(req.body)
    await newTransaction.save()
    res.send("new and saved")
})

router.delete('/transaction/:id', async (req, res) => {
    await Transaction.findByIdAndRemove(req.params.id)
    res.send("deleted")
})



module.exports = router;