const {
  addExpense,
  getExpense,
  deleteExpense,
  getExpenseByMonth,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
  getIncomeByMonth,
} = require("../controllers/income");

const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .get("/get-incomeByMonth/:month", getIncomeByMonth)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .get("/get-expenseByMonth/:month", getExpenseByMonth)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
