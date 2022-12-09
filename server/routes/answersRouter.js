import express from "express";
import { getRandomAnswer } from "../models/answersModel.js";
const router = express.Router();


router.get("/answer", async (req, res) => {
  const data = await getRandomAnswer();
  res.json({ success: true, payload: data });
});

export default router;
