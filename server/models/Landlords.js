const mongoose = require('mongoose')


const options = {
  timestamps: true, 
  createdAt: "created_at", 
  updatedAt: "updated_at"
}

const LandlordsSchema = new mongoose.Schema({
  firstName: String, 
  lastName: String, 
  overallRating: Number, 
  wouldRentAgainLevel: Number, 
  tags: [String], 
  friendlinessRating: Number, 
  communicationRating: Number, 
  maintenanceRating: Number, 
  responsivenessRating: Number, 
  transactionIssue: Number,
}, options)

module.exports = mongoose.model('landlords', LandlordsSchema)