const express = require('express');
const app = express();
const emailParser = require("./routes/email-parser");
const cron = require('node-cron');
const gmailTester = require("gmail-tester");
const path = require("path");

app.use(express.json());
app.use('/api', emailParser);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
function refreshToken() {
    try {
        gmailTester.refresh_access_token(path.resolve(__dirname,"./credentials.json"),path.resolve(__dirname,"./token.json"));
    } catch (error) {
        console.error('Error refreshing token:', error);
    }
}

cron.schedule('0 0 * * *', () => {
    console.log('Refreshing token...');
    refreshToken();
});
console.log('Cron job started. Token will be refreshed every 5 minutes.');
module.exports = app;