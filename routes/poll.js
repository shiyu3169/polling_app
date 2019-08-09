const express = require("express");
const router = express.Router();

const Pusher = require("pusher");

var channels_client = new Pusher({
  appId: "839576",
  key: "dbe07c7adbfc7f3d5507",
  secret: "aa0083eb06728abcdfa5",
  cluster: "us2",
  encrypted: true
});

router.get("/", (req, res) => {
  res.send("POLL");
});

router.post("/", (req, res) => {
  console.log(req.body);
  channels_client.trigger("os-poll", "os-vote", {
    points: 1,
    os: req.body.os
  });

  return res.json({ success: true, message: "Thank you for voting" });
});

module.exports = router;
