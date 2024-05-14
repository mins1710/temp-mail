const gmailTester = require("gmail-tester");
const router = require("express").Router();
const path = require("path");

router.get("/test", (req,res) => {
    return res.send("Hello world");
})
router.post("/read", async (req,res) => {
    const options = req.body;
    console.log(options);
    const messages = await gmailTester.get_messages( path.resolve(__dirname, "../credentials.json"),path.resolve(__dirname, "../token.json"),options);
    return res.send(messages);
});


module.exports = router;