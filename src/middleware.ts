import { NextResponse } from "next/server";

function getCSPDirectives() {
  const cspDirectives = {
    "default-src": ["'self'"],
    "script-src": ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
    "style-src": ["'self'", "'unsafe-inline'", "*"],
    "img-src": ["'self'", "data:", "blob:"],
    "font-src": ["'self'"],
    "object-src": ["'none'"],
    "connect-src": ["'self'"],
    "frame-src": ["'self'"],
    "base-uri": ["'self'"],
    "form-action": ["'self'"],
    "frame-ancestors": ["'self'"],
  };

  const csp = Object.entries(cspDirectives)
    .map(([key, values]) => `${key} ${values.join(" ")}`)
    .join("; ");

  return { csp };
}

export function middleware() {
  const response = NextResponse.next();

  const { csp } = getCSPDirectives();

  // Security headers
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), interest-cohort=()"
  );
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
