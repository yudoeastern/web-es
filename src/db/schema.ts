import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export interface AgendaItem {
  time: string;
  duration?: string;
  title: string;
  speaker?: string;
}

export interface SpeakerInfo {
  name: string;
  title?: string;
  company?: string;
  photoUrl?: string;
}

export const webinars = sqliteTable("webinars", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  location: text("location").notNull(),
  partner: text("partner").notNull(),
  status: text("status", { enum: ["upcoming", "past", "fully_booked"] }).notNull().default("upcoming"),
  imageUrl: text("image_url"),
  agenda: text("agenda", { mode: "json" }).$type<AgendaItem[]>().notNull().default(sql`'[]'`),
  speakers: text("speakers", { mode: "json" }).$type<SpeakerInfo[]>().notNull().default(sql`'[]'`),
  createdAt: text("created_at").notNull().default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: text("updated_at").notNull().default(sql`(CURRENT_TIMESTAMP)`),
});

export const registrations = sqliteTable("registrations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  webinarId: integer("webinar_id").notNull().references(() => webinars.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  jobTitle: text("job_title"),
  phone: text("phone"),
  createdAt: text("created_at").notNull().default(sql`(CURRENT_TIMESTAMP)`),
});
