import { Request, Response, Router } from "express";
import { userRouter } from "./userRoute";

// Init router and path
const router = Router();

// Add sub-routes
router.get("/", async (req: Request, res: Response) => {
  const x = 3000;
  console.log(`wait ${x} seconds`);
  await new Promise((res) => setTimeout(res, x));
  console.log(`${x} seconds done`);
  return res.send("ok");
  //   return res.status(OK).json({ users });
});

router.use("/user", userRouter);
// Export the base-router
export default router;
