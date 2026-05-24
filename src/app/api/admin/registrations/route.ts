import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { registrations } from "@/db/schema";
import { desc } from "drizzle-orm";
import { verifyToken, getAuthToken } from "@/lib/auth";

async function requireAuth(request: NextRequest) {
  const token = getAuthToken(request);
  if (!token) return false;
  const payload = await verifyToken(token);
  return !!payload;
}

export async function GET(request: NextRequest) {
  const authenticated = await requireAuth(request);
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const allRegistrations = await db
    .select()
    .from(registrations)
    .orderBy(desc(registrations.createdAt));

  return NextResponse.json({ data: allRegistrations });
}
