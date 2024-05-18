const gmailTester = require("gmail-tester");
const router = require("express").Router();
const path = require("path");
const cron = require('node-cron');

router.get("/test", (req,res) => {
    return res.send("Hello world");
})
router.post("/read", async (req,res) => {
   try {
    const options = req.body;
    const messages = await gmailTester.get_messages( path.resolve(__dirname, "../credentials.json"),path.resolve(__dirname, "../token.json"),options);
    return res.send(messages);
   } catch (err){
    return res.status(500).send(err.message);
   }
});

// Function to refresh the token



module.exports = router;