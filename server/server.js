const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose')
require('dotenv').config()
const Landlords = require('./models/Landlords')
const Users = require('./models/Users')
const RealEstateProperty = require('./models/RealEstateProperty')
const Reviews = require('./models/Reviews')

/* DATABASE CONNECTION */
mongoose.connect(
  process.env.DB_CONNECTION_STRING,  
  {useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('connected to db')
)
 
const db = mongoose.connection 

const typeDefs = gql`
  type Landlord {
    name: String 
    id: String 
    city: String 
    state: String 
    street: String 
    zipcode: String
  }

  input AddressObj{
    street: String, 
    city: String, 
    zipcode: String
  }

  type Query {
    getResults(city: String, street: String, zipcode: String): [Landlord]
    hello: String, 
    getAllLandlords(id: String): [Landlord], 
    dummyQuery: String
  }
`;
 
const resolvers = {
  Query: {
    getResults: (__, args, context) => {
      console.log(args)
      return [{
      name: 'test test', 
      id: '12345', 
      city: args.city, 
      state: 'test', 
      street: args.address, 
      zipcode: args.zipcode, 
      message: 'Got results!'
    }]},
    getAllLandlords: (__, args, context) => [{
      name: 'name', 
      id: args.id, 
      city: 'city', 
      state: 'state', 
      street: 'street', 
      zipcode: 'zipcode'
    }],
    hello: () => 'hello', 
    dummyQuery: async () => {
      try {
        const data = await RealEstateProperty.find({})
        console.log(data)
      }catch(err) {
        console.log(err)
      }
      
      return 'hello'
    }
  },
};
 
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  context:  {
    db
  }
});
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);
