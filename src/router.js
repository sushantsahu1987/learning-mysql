const { transactions } = require("./controller");

module.exports = router = (app) => {
  app.get("/transactions", transactions.getAllTransactions);
  app.get("/transactions/:id", transactions.getTransactionByID);
  app.put("/transactions/:id", transactions.updateTransactionByID);
  app.post("/transactions", transactions.addNewTransaction);
  app.delete("/transactions/:id", transactions.deleteTransactionByID);
};
