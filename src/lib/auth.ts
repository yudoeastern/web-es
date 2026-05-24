import { NextRequest, NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.ADMIN_SECRET || "change-this-to-a-strong-secret"
);

export async function signToken(payload: Record<string, unknown>) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch {
    return null;
  }
}

export function getAuthToken(request: NextRequest): string | null {
  return request.cookies.get("es_admin_token")?.value ?? null;
}

export async function requireAuth(request: NextRequest) {
  const token = getAuthToken(request);
  if (!token) return NextResponse.redirect(new URL("/esadm/login", request.url));
  
  const payload = await verifyToken(token);
  if (!payload) return NextResponse.redirect(new URL("/esadm/login", request.url));
  
  return null; // authorized
}
