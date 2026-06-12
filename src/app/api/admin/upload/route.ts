import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { verifyToken, getAuthToken } from "@/lib/auth";

async function requireAuth(request: NextRequest) {
  const token = getAuthToken(request);
  if (!token) return false;
  const payload = await verifyToken(token);
  return !!payload;
}

export async function POST(request: NextRequest) {
  const authenticated = await requireAuth(request);
  if (!authenticated) {
    console.error("[UPLOAD] Unauthorized - missing or invalid token");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    console.log("[UPLOAD] Received upload request");
    const contentType = request.headers.get("content-type") || "";
    console.log("[UPLOAD] Content-Type:", contentType);

    const formData = await request.formData();
    const file = formData.get("file") as File;

    console.log("[UPLOAD] File received:", file ? {
      name: file.name,
      type: file.type,
      size: file.size
    } : "null");

    if (!file) {
      console.error("[UPLOAD] No file in formData");
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!validTypes.includes(file.type)) {
      console.error("[UPLOAD] Invalid file type:", file.type);
      return NextResponse.json(
        { error: "Invalid file type. Only JPEG, PNG, WEBP, and GIF are allowed" },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      console.error("[UPLOAD] File too large:", file.size);
      return NextResponse.json(
        { error: "File size must be less than 5MB" },
        { status: 400 }
      );
    }

    // Generate unique filename
    const ext = file.name.split(".").pop() || "png";
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 15);
    const filename = `webinar-${timestamp}-${randomStr}.${ext}`;

    // Ensure events directory exists
    const eventsDir = join(process.cwd(), "public", "events");
    try {
      await mkdir(eventsDir, { recursive: true });
    } catch (e) {
      // Directory already exists
    }

    // Save file
    const filePath = join(eventsDir, filename);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filePath, buffer);

    console.log("[UPLOAD] Success:", filename);

    // Return public URL path
    const publicPath = `/events/${filename}`;

    return NextResponse.json({
      success: true,
      path: publicPath,
      filename: filename
    });
  } catch (error) {
    console.error("[UPLOAD] Error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
