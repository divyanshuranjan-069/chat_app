const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../controllers/chat.controller");

router.post("/send", sendMessage);
router.get("/messages/:threadId", getMessages);

module.exports = router;
