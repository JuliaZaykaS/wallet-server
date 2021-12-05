import mongoose from 'mongoose'
import Joi from 'joi'
const { Schema } = mongoose

const TransactionSchema = new Schema(
  {
    transactionType: {
      type: Boolean,
      required: [true, 'Select the type of transaction: income(true) or expense(false)'],
    },
    sum: {
      type: Number,
      required: [true, 'Set transaction  sum '],
    },
    date: {
      type: Date,
      required: [true, 'Set transaction date '],
    },
    trDay: {
      type: Number,
    },
    trMonth: {
      type: Number,
    },
    trYear: {
      type: Number,
    },
    comment: {
      type: String,
    },
    category: {
      type: String,
    },
    owner: {
      type: mongoose.ObjectId,
      ref: 'user',
    },
     balance: {
    type: Number
  },
  }, {
    versionKey: false
  }
)
const joiTransactionSchema = Joi.object({
  transactionType: Joi.boolean().required(),
  sum: Joi.number().required(),
  date: Joi.date().required(),
  category: Joi.string().optional(),
})

const Transaction = mongoose.model('transaction', TransactionSchema)

export { Transaction, joiTransactionSchema }
