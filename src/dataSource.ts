import { DataSource } from "typeorm";
import { User } from "./entity/user.ts";

export const AppDataSource = new DataSource({
  type: "postgres", // or 'mysql', 'sqlite', etc.
  host: "localhost",
  port: 5432, // Default port for PostgreSQL
  username: "your_username",
  password: "your_password",
  database: "your_database",
  synchronize: true, // Automatically synchronize schema (useful for dev)
  logging: true, // Enable logging for SQL queries
  entities: [User], // Entities to load
  migrations: [], // Optional, define if needed
  subscribers: [], // Optional
});
