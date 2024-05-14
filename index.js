const express = require('express');
const app = express();
const emailParser = require("./routes/email-parser");

app.use(express.json());
app.use('/api', emailParser);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;