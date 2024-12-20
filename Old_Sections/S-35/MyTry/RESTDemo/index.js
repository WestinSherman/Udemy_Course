const express = require('express');
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const port = 8080;
const { v4: uuid } = require('uuid');
uuid();
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }))
let comments = [
    {
        id: uuid(),
        username: "Brad",
        comment: "lol that is so funny!"
    },
    {
        id: uuid(),
        username: "Melanie",
        comment: "OOO Chairs!!!"
    },
    {
        id: uuid(),
        username: "Lavinia",
        comment: "I want to kill everyone from within my room!!!"
    },
    {
        id: uuid(),
        username: "Barry",
        comment: "I'm going to take my dog fishing!"
    },
]
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
})

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})


// GET handler
app.get('/tacos', (req, res) => {
    const { meat, qty } = req.query;
    res.send(`Get /tacos: Ordered ${qty} ${meat} tacos`);
});

// POST handler
app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect("/comments");
})
app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/shows", { comment });
});
app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment })
});
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect("/comments");
});
app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
});
app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Post /tacos: Ordered ${qty} ${meat} tacos`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));




// const express = require('express');
// const app = express();
// const path = require("path");
// const port = 8080;

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // View engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// // Comments array
// const comments = [
//     { id: 1, username: "Brad", comment: "lol that is so funny!" },
//     { id: 2, username: "Melanie", comment: "OOO Chairs!!!" },
//     { id: 3, username: "Lavinia", comment: "I want to kill everyone from within my room!!!" },
//     { id: 4, username: "Barry", comment: "I'm going to take my dog fishing!" },
// ];

// // Routes
// app.get("/comments", (req, res) => {
//     res.render("comments/index", { comments });
// });

// app.get("/comments/new", (req, res) => {
//     res.render("comments/new");
// });

// app.post("/comments", (req, res) => {
//     const { username, comment } = req.body;
//     const id = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;
//     comments.push({ id, username, comment });
//     res.redirect("/comments");
// });

// app.get("/comments/:id", (req, res) => {
//     const { id } = req.params;
//     const comment = comments.find(c => c.id === parseInt(id));
//     if (!comment) {
//         return res.status(404).send("Comment not found");
//     }
//     res.render("comments/shows", { comment });
// });

// // Taco routes (optional, unrelated to comments)
// app.get('/tacos', (req, res) => {
//     const { meat, qty } = req.query;
//     res.send(`Get /tacos: Ordered ${qty} ${meat} tacos`);
// });

// app.post('/tacos', (req, res) => {
//     const { meat, qty } = req.body;
//     res.send(`Post /tacos: Ordered ${qty} ${meat} tacos`);
// });

// // Start server
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));