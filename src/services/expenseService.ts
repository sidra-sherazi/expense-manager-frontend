import {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getExpense,
} from "../api/expenses";


export const expenseService = {

  getAll(filters:any = {}) {
    return getExpenses(filters);
  },


  getById(id:number) {
    return getExpense(id);
  },


  create(data:any) {
    return createExpense(data);
  },


  update(id:number, data:any) {
    return updateExpense(id,data);
  },


  remove(id:number) {
    return deleteExpense(id);
  }

};