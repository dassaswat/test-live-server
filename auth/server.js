const express = require('express');
const app = express();

app.use(express.urlencoded());

app.post("/auth", function(req, res) {
    const streamKey = req.body.key;

    if (streamKey === "HulimavuJar432#") {
        res.status(200).send();
        return;
    }

    res.status(403).send();
});

app.listen(8000, function() {
    console.log("READY AND LISTENING ON PORT 8000!")
});