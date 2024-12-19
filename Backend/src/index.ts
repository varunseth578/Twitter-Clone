import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./schema";

const startServer = async () => {
  const app = express() as Application; // Explicitly cast app to Application

  // Configure body-parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer().catch((err) => {
  console.error("Server failed to start:", err);
});
