import { Request, Response, Router } from "express";

export const userRouter = Router();

userRouter.post("/login", async (req: Request, res: Response) => {
  const x = 1000;
  console.log(`wait ${x} mili seconds`);
  await new Promise((res) => setTimeout(res, x));
  console.log(req.body);
  return res.status(200).json({ email: req.body.email, msg: "login ok" });
});
