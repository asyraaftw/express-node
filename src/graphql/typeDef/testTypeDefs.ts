// graphql/testTypeDefs.js

const testTypeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

export default testTypeDefs;
