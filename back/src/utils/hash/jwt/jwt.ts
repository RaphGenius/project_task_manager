import jwt from "jsonwebtoken";

type Payload = string | Buffer | object;
const KEY = process.env.JWT_SECRET!;

const jwtSign = (payload: Payload, options?: jwt.SignOptions) =>
  jwt.sign(payload, KEY, { expiresIn: "1h", ...options });

const jwtDecode = (token: string) => jwt.decode(token);

const jwtVerify = (token: string) => {
  try {
    return jwt.verify(token, KEY);
  } catch (error) {
    return null;
  }
};

export { jwtDecode, jwtSign, jwtVerify };
