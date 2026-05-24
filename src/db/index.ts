import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import { webinars } from "./schema";

const sqlite = new Database("webinars.db");
export const db = drizzle(sqlite, { schema: { webinars } });
