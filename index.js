const {MongoClient} = require("mongodb");
const express = require("express");

const uri = "mongodb+srv://nishanthsdedu:27102003@cluster0.yhrsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    var ret = run();
    if (ret == 1) {
        res.send("Connected to MongoDB successfully!");
    } else {
        res.send("Failed to connect to MongoDB.");
    }
}
);


async function run() {
    try {
        await client.connect();
        const db = client.db("nish-assist");
        const texts = db.collection("texts");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        return 0;
    } finally {
        await client.close();
        return 1;
    }
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
