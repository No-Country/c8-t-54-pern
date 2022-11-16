import { Request, Response } from "express";
import { builtinModules } from "module";

export const userMe = async (req: Request, res: Response) => {
  res.send(req.user);
};
 
