export const cookieOptions = {
  httpOnly: true, //
  secure: false,
  sameSite: "lax",
  domain: "localhost",
  path: "/",
} as const;
