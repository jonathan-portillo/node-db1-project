const express = require("express");
const db = require("../data/dbConfig");
const account = express.Router();

db.on("query", (data) => {
  console.log(data);
});

account.get("/", async (req, res) => {
  try {
    const accounts = await db("accounts");
    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error with database", error: error });
  }
});

account.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const acct = await db.select("*").from("accounts").where({ id }).first();
    if (acct) {
      res.status(200).json(acct);
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error", error: error });
  }
});

account.post("/", async (req, res) => {
  accountData = req.body;

  try {
    const acct = await db.insert(accountData).into("accounts");
    res.status(201).json(acct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error", error: err });
  }
});

account.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("accounts")
    .where({ id })
    .update(changes)
    .then((account) => {
      if (account) {
        res.status(200).json({ updated: req.body });
      } else {
        res.status(404).json({ message: "invalid id" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: "db error", error: err });
    });
});

account.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const acct = await db.del().from("accounts").where({ id });
    acct
      ? res.status(200).json({ deleted: acct })
      : res.status(404).json({ message: "invalid id" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error", error: err });
  }
});

module.exports = account;
