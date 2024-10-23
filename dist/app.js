var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = new ApolloServer({ typeDefs, resolvers });
        try {
            const { url } = yield startStandaloneServer(server, {
                listen: { port: PORT },
            });
            console.log(`👁️ Ready : ${url}`);
        }
        catch (error) {
            console.error("❌ Error : ", error);
        }
    });
}
startApolloServer();
