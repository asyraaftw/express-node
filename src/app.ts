import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./dataSource.ts";
import { User } from "./entity/user.ts";

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

  app.get("/user", async (request: any, result: any) => {
    const user1 = await AppDataSource?.getRepository(User).find();

    result?.json(user1);
  });

  app.post("/user", async (req, res) => {
    const user = await AppDataSource?.getRepository(User).save(req.body);
    res.json(user);
  });

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
