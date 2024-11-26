import { Request, Response } from "express";

const logout = (req: Request, res: Response) => {
  res.clearCookie("jwt");

  const message = "Deconnexion effectuée avec succès.";
  res.status(200).json({ message });
};

export default logout;
