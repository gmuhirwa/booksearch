
// Require graphql package
const grapgql = require('graphql');
// JavaScript utility to get an object from a db or an array
const_ = require('lodash');
// Define our Schema - enter the graph and interact with it.
// Object types needed to be defined.
const {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
  } = graphql;  // properties from graphql package

// Dummy Data for Book

var books = [
  {name: 'The Heaven Test in Rwanda in 1994', genre: 'Spirituality', id: '1'},
  {name: 'How I was Saved by Faith', genre: 'Spirituality', id: '2'},
  {name: 'True Love is Spiritual', genre: 'Spirituality', id: '3'},
  {name: 'The meaning of Being Born-again', genre: 'Spirituality', id: '4'},
  {name: 'Breaking Alcohol Bondage', genre: 'Spirituality', id: '5'},
  {name: 'Breaking Cigarette Bondage', genre: 'Spirituality', id: '6'},
  {name: 'Consciousness :: The Awakening', genre: 'Spirituality', id: '7'},
  {name: 'The NAture of God', genre: 'Spirituality', id: '8'},
  {name: 'You are NOT a boy, you are a Spirit', genre: 'Spirituality', id: '9'},
  {name: 'God-alike Faithfulness', genre: 'Spirituality', id: '10'},

];

var authors = [
  {name: 'Germain MUHIRWA', age: 42, id: '1'}
  {name: 'Germain MUHIRWA', age: 42, id: '2'}
  {name: 'Germain MUHIRWA', age: 42, id: '3'}
  {name: 'Germain MUHIRWA', age: 42, id: '4'}
  {name: 'Germain MUHIRWA', age: 42, id: '5'}
  {name: 'Germain MUHIRWA', age: 42, id: '6'}
  {name: 'Germain MUHIRWA', age: 42, id: '7'}
  {name: 'Germain MUHIRWA', age: 42, id: '8'}
  {name: 'Germain MUHIRWA', age: 42, id: '9'}
  {name: 'Germain MUHIRWA', age: 42, id: '10'}
  
  ];

// Creating the Book Object.
const BookType = new GraphQLObjectType({  
  name:'Book', 
  fields:() => ({
  	id: {type: GraphQLID},
  	name: {type: GraphQLString},
  	genre: {type: GraphQLString}
  })

});  // An object that tells what this book type is all about.

// Creating the Author Object.
const AuthorType = new GraphQLObjectType({  
  name:'Author', 
  fields:() => ({
  	id: {type: GraphQLID},
  	name: {type: GraphQLString},
  	age: {type: GraphQLInt}  })

});  // An object that tells what this book type is all about.

// How do we get into the graph and grab data?
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',  // The relationship
  fields: {
  	book: {
  	  type: BookType,
  	  args: {id: {type: GraphQLID}},
  	  resolve(parent, args) {

  	  // code to get data from db / other source
  	  return _.find(books, {id: args.id});  // here we are using lodash to look into books array based on id

  	  }
  	},

    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args) {
      	return _.find(authors, {id: args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery	  // how we actually jump into the graph.
});
