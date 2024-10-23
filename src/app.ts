import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./dataSource.ts";
import { User } from "./entity/user.ts";
import dotenv from "dotenv";

// dumb
import testTypeDefs from "./graphql/typeDef/testTypeDefs.ts";
import testResolver from "./graphql/resolver/testResolver.ts";

// dotenv
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT);

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: testTypeDefs,
    resolvers: testResolver,
  });

  app.get("/entity/user", async (request: any, result: any) => {
    const user = await AppDataSource.getRepository(User).find();
    result.json(user);
  });

  app.post("/entity/user", async (req, res) => {
    const user = await AppDataSource.getRepository(User).save(req.body);
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
