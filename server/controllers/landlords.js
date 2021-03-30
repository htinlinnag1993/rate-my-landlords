const axios = require('axios')
require('dotenv').config()


const findLandlordsByAddress = async (__, args, context) => {
  console.log('queried')
  return [{
  "name": "Ashley Pean", 
  "id": 1234,
  street: "123 Main St", 
  city: "Washington",
  state: "DC", 
  zipcode: "12345"
  }]  
}

const findLandordById = async (__, args, context) => {
  const landlorId = context.id 
  return {
    name: "Landlor name here"
  }
}

module.exports =  {
  findLandlordsByAddress, 
  findLandordById
}