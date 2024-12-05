import { CookieOptions } from "express";

const secure = process.env.NODE_ENV === "production";
const sameSite = "lax";
const domain =
  process.env.NODE_ENV === "dev" ? "localhost" : process.env.DOMAIN;
const httpOnly = true;

const DEFAULT_COOKIE_OPTION = {
  httpOnly,
  secure,
  sameSite,
  domain,
  path: "/",
} as const;

export const REFRESH_TOKEN_COOKIE_OPTION: CookieOptions = {
  ...DEFAULT_COOKIE_OPTION,
  maxAge: 60 * 1000,
  path: "/api/auth/refresh",
};
