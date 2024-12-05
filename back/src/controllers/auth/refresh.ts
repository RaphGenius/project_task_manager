import { ACCESS_TOKEN_NAME, REFRESH_TOKEN_NAME } from "@/config/jwt";
import { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookies/cookies";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyTokenValidity,
} from "@/utils/jwt/jwt";
import { errorBody } from "@/utils/response/responseformat";
import { Request, Response } from "express";

const refresh = (req: Request, res: Response) => {
  const refreshToken = req.cookies[REFRESH_TOKEN_NAME];

  if (!refreshToken) {
    res.status(401).json(errorBody("Non authentifié"));
    return;
  }

  const refreshTokenVerified = verifyTokenValidity(refreshToken, "refresh");

  if (!refreshTokenVerified || typeof refreshTokenVerified !== "object") {
    res
      .clearCookie(ACCESS_TOKEN_NAME)
      .clearCookie(REFRESH_TOKEN_NAME)
      .status(401)
      .json({ message: "jwt invalide" });
    return;
  }
  let decoded = refreshTokenVerified as {
    userId: string;
    iat: number;
    exp: number;
  };

  const issuedAt = new Date(decoded.iat * 1000); // Date de création
  const isOlderThan48Hours =
    Date.now() - issuedAt.getTime() > 48 * 60 * 60 * 1000;

  let newRefreshToken = refreshToken;

  if (isOlderThan48Hours) {
    newRefreshToken = generateRefreshToken({});
  }

  const newAccessToken = generateAccessToken({});

  res
    .cookie(REFRESH_TOKEN_NAME, newRefreshToken, REFRESH_TOKEN_COOKIE_OPTION)
    .json({ accessToken: newAccessToken });
};

export default refresh;
