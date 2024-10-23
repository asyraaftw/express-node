import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const app = express();
const PORT = 4000;

const typeDefs = `
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Bedu",
  },
  {
    title: "Aku Sebuah Pena",
    author: "Azroy",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: PORT },
    });

    console.log(`👁️ Ready : ${url}`);
  } catch (error) {
    console.error("❌ Error : ", error);
  }
}

startApolloServer();
