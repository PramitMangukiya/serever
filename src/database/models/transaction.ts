const mongoose = require('mongoose')

const transactionSchema: any = new mongoose.Schema({
    transactionId: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    qrCodeData: { type: String, required: true },
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now, expires: '5m' }  
})

export const transactionModel = mongoose.model('transaction', transactionSchema);