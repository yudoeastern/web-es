import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { webinars } from "@/db/schema";
import { eq, desc, count } from "drizzle-orm";
import { z } from "zod";
import { verifyToken, getAuthToken } from "@/lib/auth";

const webinarSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  location: z.string().min(1, "Location is required"),
  partner: z.string().min(1, "Partner is required"),
  status: z.enum(["upcoming", "past", "fully_booked"]),
  imageUrl: z.string().optional(),
});

async function requireAuth(request: NextRequest) {
  const token = getAuthToken(request);
  if (!token) return false;
  const payload = await verifyToken(token);
  return !!payload;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");
  const offset = (page - 1) * limit;

  const allWebinars = await db
    .select()
    .from(webinars)
    .orderBy(desc(webinars.createdAt))
    .limit(limit)
    .offset(offset);

  const totalResult = await db.select({ count: count() }).from(webinars);
  const total = totalResult[0].count;

  return NextResponse.json({
    data: allWebinars,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}

export async function POST(request: NextRequest) {
  const authenticated = await requireAuth(request);
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const validated = webinarSchema.parse(body);

  const result = await db.insert(webinars).values(validated).returning();
  return NextResponse.json({ data: result[0] }, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const authenticated = await requireAuth(request);
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") || "0");
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const body = await request.json();
  const validated = webinarSchema.partial().parse(body);

  const result = await db
    .update(webinars)
    .set({ ...validated, updatedAt: new Date().toISOString() })
    .where(eq(webinars.id, id))
    .returning();

  if (!result.length) {
    return NextResponse.json({ error: "Webinar not found" }, { status: 404 });
  }

  return NextResponse.json({ data: result[0] });
}

export async function DELETE(request: NextRequest) {
  const authenticated = await requireAuth(request);
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") || "0");
  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  const result = await db.delete(webinars).where(eq(webinars.id, id)).returning();

  if (!result.length) {
    return NextResponse.json({ error: "Webinar not found" }, { status: 404 });
  }

  return NextResponse.json({ data: result[0] });
}
