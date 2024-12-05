import jwt, { JsonWebTokenError } from "jsonwebtoken";

type Payload = string | Buffer | object;
type verifyType = "access" | "refresh";

const ACCESS_KEY = process.env.ACCES_TOKEN_SECRET!;
const REFRESH_KEY = process.env.REFRESH_TOKEN_SECRET!;

const generateAccessToken = (payload: Payload) =>
  jwt.sign(payload, ACCESS_KEY, { expiresIn: "30s" });

const generateRefreshToken = (payload: Payload) =>
  jwt.sign(payload, REFRESH_KEY, { expiresIn: "1min" });

const verifyTokenValidity = (token: string, type: verifyType) => {
  const key = type === "access" ? ACCESS_KEY : REFRESH_KEY;
  try {
    jwt.verify(token, key);
    return jwt.decode(token);
  } catch (error) {
    return false;
  }
};

const jwtDecode = (token: string) => jwt.decode(token);

export {
  jwtDecode,
  generateAccessToken,
  generateRefreshToken,
  verifyTokenValidity,
};
