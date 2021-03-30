const axios = require('axios')
require('dotenv').config()


const findLandlordsByAddress = async (__, args, context) => {
  console.log("Server hit!!!");
  const config = {
    headers: {
      "Content-Type": "application/json",
    }
  };
  // Add Your Key Here!!!
  axios.defaults.headers.common = {
    "X-API-Key": process.env.ATOM_KEY,
  };
  try {
    // const data = await axios({
    //   method: "GET",
    //   url: process.env.ATOM_URL,
    //   config,
    //   params: { 
    //     address1: "6155 Junction Blvd", 
    //     address2: "Rego Park, NY"
    //   }
    // });
    const data = axios.get(process.env.ATOM_URL, {
      params: { 
        address1: "6155 Junction Blvd", 
        address2: "Rego Park, NY"
      }
    })
    console.log(data);
  } catch (e) {
    console.error(e);
  }

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