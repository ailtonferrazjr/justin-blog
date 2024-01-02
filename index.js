import express from 'express';

const app = express();
const port = 3000;


// Load Public folder as Static
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {});
})

app.listen(port, (req, res) => {
    console.log(`Server is running in port ${port}!`);
})

