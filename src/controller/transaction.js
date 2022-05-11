const getAllTransactions = (req, resp) => {
  resp.send(txs);
};

const getTransactionByID = (req, resp) => {
  let id = parseInt(req.params.id);
  tx = txs[id - 1];
  resp.send(tx);
};

const updateTransactionByID = (req, resp) => {
  let id = parseInt(req.params.id);
  tx = txs[id - 1];
  const body = req.body;
  tx.name = body.name;
  tx.price = body.price;
  resp.send(tx);
};

const addNewTransaction = (req, resp) => {
  const id = txs.length;
  const name = req.body.name;
  const price = req.body.price;
  const tx = { id: id + 1, name, price };
  txs.push(tx);
  resp.send(tx);
};

const deleteTransactionByID = (req, resp) => {
  let id = parseInt(req.params.id);
  const tx = txs[id - 1];
  txs = txs.filter((tx) => tx.id !== id);
  resp.send(tx);
};

module.exports = {
  getAllTransactions,
  getTransactionByID,
  updateTransactionByID,
  addNewTransaction,
  deleteTransactionByID,
};
