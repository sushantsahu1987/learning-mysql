const express = require("express");
const app = express();
app.use(express.json());

let txs = [
  {
    id: 1,
    name: "receipt 1",
    price: 12.33,
  },
  {
    id: 2,
    name: "receipt 2",
    price: 12.77,
  },
  {
    id: 3,
    name: "receipt 3",
    price: 189.22,
  },
  {
    id: 4,
    name: "receipt 4",
    price: 77.22,
  },
  {
    id: 5,
    name: "receipt 5",
    price: 1.22,
  },
];

app.get("/transactions", (req, resp) => {
  resp.send(txs);
});

app.get("/transactions/:id", (req, resp) => {
  let id = parseInt(req.params.id);
  tx = txs[id - 1];
  resp.send(tx);
});

app.put("/transactions/:id", (req, resp) => {
  let id = parseInt(req.params.id);
  tx = txs[id - 1];
  const body = req.body;
  tx.name = body.name;
  tx.price = body.price;
  resp.send(tx);
});

app.post("/transactions", (req, resp) => {
  const id = txs.length;
  const name = req.body.name;
  const price = req.body.price;
  const tx = { id: id + 1, name, price };
  txs.push(tx);
  resp.send(tx);
});

app.delete("/transactions/:id", (req, resp) => {
  let id = parseInt(req.params.id);
  const tx = txs[id - 1];
  txs = txs.filter((tx) => tx.id !== id );
  resp.send(tx);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
