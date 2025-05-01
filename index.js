const {MongoClient} = require("mongodb");
const express = require("express");

const uri = "mongodb+srv://nishanthsdedu:27102003@cluster0.yhrsj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("nish-assist");
        const texts = db.collection("texts");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
}


run() 
