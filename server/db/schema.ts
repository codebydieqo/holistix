// drizzle/schema.ts
import {
  pgTable,
  uuid,
  text,
  timestamp,
  varchar,
  boolean,
  integer,
  date,
  primaryKey,
} from "drizzle-orm/pg-core";

// USERS
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// RECIPES
export const recipes = pgTable("recipes", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  title: varchar("title", { length: 255 }).notNull(),
  instructions: text("instructions"),
  createdAt: timestamp("created_at").defaultNow(),
});

// INGREDIENTS (linked to recipes)
export const ingredients = pgTable("ingredients", {
  id: uuid("id").defaultRandom().primaryKey(),
  recipeId: uuid("recipe_id")
    .notNull()
    .references(() => recipes.id),
  name: varchar("name", { length: 255 }).notNull(),
  quantity: varchar("quantity", { length: 50 }),
  unit: varchar("unit", { length: 50 }),
});

// MEALS (user-defined meals referencing recipes)
export const meals = pgTable("meals", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  recipeId: uuid("recipe_id").references(() => recipes.id),
  title: varchar("title", { length: 255 }),
});

// MEAL SCHEDULE (calendar slots)
export const mealSchedule = pgTable("meal_schedule", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  mealId: uuid("meal_id")
    .notNull()
    .references(() => meals.id),
  date: date("date").notNull(),
  timeOfDay: varchar("time_of_day", { length: 20 }).notNull(), // breakfast, lunch, dinner
});

// GROCERY LISTS
export const groceryLists = pgTable("grocery_lists", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  name: varchar("name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// GROCERY ITEMS
export const groceryItems = pgTable("grocery_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  listId: uuid("list_id")
    .notNull()
    .references(() => groceryLists.id),
  name: varchar("name", { length: 255 }).notNull(),
  quantity: varchar("quantity", { length: 50 }),
  category: varchar("category", { length: 50 }),
  checked: boolean("checked").default(false),
});

// HABITS
export const habits = pgTable("habits", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id),
  name: varchar("name", { length: 255 }).notNull(),
  frequency: varchar("frequency", { length: 50 }), // e.g., daily, weekly
  createdAt: timestamp("created_at").defaultNow(),
});

// HABIT LOGS
export const habitLogs = pgTable("habit_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  habitId: uuid("habit_id")
    .notNull()
    .references(() => habits.id),
  date: date("date").notNull(),
  completed: boolean("completed").default(false),
});
