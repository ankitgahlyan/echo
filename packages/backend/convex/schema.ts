import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        createdAt: v.number(),
        updatedAt: v.optional(v.number()),
    })
    .index("by_email", ["email"])
    .index("by_creation", ["createdAt"]),
});