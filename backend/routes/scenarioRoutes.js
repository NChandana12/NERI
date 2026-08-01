import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("POST /api/scenario hit");
  res.json({
    success: true,
    body: req.body,
  });
});

export default router;