const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");
const { title } = require("process");
console.log(redditData)

//Now using Bootstraps.
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))
//homepage:
app.get("/", (req, res) => {
    res.render("home.ejs")
})
//ChatGPT idea for error: middleware
// app.use((req, res, next) => {
//     console.log(`Request URL: ${req.url}`);
//     next();
// });



app.get("/cats", (req, res) => {
    const cats = [
        "Blue", "Mittens", "Mistery", "Monty", "Winston"
    ]
    res.render("cats", { cats })
})

app.set("views", path.join(__dirname, "/views"))

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render("subreddit", { ...data });
    } else {
        res.render("notfound", { subreddit })
    }

})
//Attempt to fix my code:






app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", { num })
})
app.listen(8080, () => {
    console.log("Listening on Port 8080")
})



//WELLL, JUST REMOVED THIS LINE BELOW AND IT WORKED!!!
// const data = redditData[subreddit];



//ChatGPT version:

// const express = require("express");
// const app = express();
// const path = require("path");
// const redditData = require("./data.json");

// // Helper function to get subreddit data
// const getSubredditData = (subreddit) => redditData[subreddit];

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));

// // Homepage route
// app.get("/", (req, res) => {
//     res.render("home");
// });

// // Subreddit route
// app.get("/r/:subreddit", (req, res) => {
//     const { subreddit } = req.params;
//     const data = getSubredditData(subreddit);

//     if (data) {
//         res.render("subreddit", { ...data });
//     } else {
//         res.send("Subreddit not found.");
//     }
// });

// // Start the server
// app.listen(8080, () => {
//     console.log("Listening on Port 8080");
// });