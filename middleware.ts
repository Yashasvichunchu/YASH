import { clerkMiddleware } from "@clerk/nextjs";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect API routes or specific pages here
    "/api/(.*)",  // Example: protecting all API routes
  ],
};
