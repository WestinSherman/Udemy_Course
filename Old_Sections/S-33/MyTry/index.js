const express = require("express");
const cors = require("cors"); // Import the cors package
// // Enable CORS for all requests
const app = express();
app.use(cors());





app.get("/", (req, res) => {
    res.send("THIS IS THE HOMEPAGE.")
})

//This one will make it so you don't have to make thousands of "app.get"'s
app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})
app.get("/r/:subreddit/:postID", (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing the Post ID: ${postID} on the ${subreddit} subreddit</h1>`)
})





app.post("/cats", (req, res) => {
    res.send("POST REQUEST TO /CATS!!! THIS IS DIFFERENT FROM A GET REQUEST! ")
})
app.get("/search", (req, res) => {
    const { q } = req.query
    res.send(`<h1>Search results for: ${q}</h1>`)
})
app.get("*", (req, res) => {
    res.send(`I don't know that path!`)
})


app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
});