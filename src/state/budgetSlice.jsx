import { createSlice } from '@reduxjs/toolkit';

const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    budget: 20000,
    expenses: [
      { id: "Marketing", name: 'Marketing', cost: 50 },
      { id: "Finance", name: 'Finance', cost: 300 },
      { id: "Sales", name: 'Sales', cost: 70 },
      { id: "Human Resource", name: 'Human Resource', cost: 40 },
      { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: [
      { id: "£ ", name: '£ Pound' },
      { id: "$ ", name: '$ Dollar' },
      { id: "€ ", name: '€ Euro' },
      { id: "¥ ", name: '¥ Yen' },
      { id: "₹ ", name: '₹ Rupee' }
    ],
    selectedCurrency: "£"
  },
  reducers: {
    addExpenses: (state, action) => {
      const totalBudget = state.expenses.reduce((total, expense) => total + expense.cost, 0) + action.payload.cost;
      if (totalBudget <= state.budget) {
        const updatedExpenses = state.expenses.map(expense =>
          expense.name === action.payload.name
            ? { ...expense, cost: expense.cost + action.payload.cost }
            : expense
        );
        return {
          ...state,
          expenses: updatedExpenses,
        };
      } else {
        alert("Cannot increase the allocation! Out of funds");
        return state;
      }
    },
    reduceExpenses: (state, action) => {
      const expenseToReduce = state.expenses.find(expense => expense.name === action.payload.name);
      if (expenseToReduce && expenseToReduce.cost - action.payload.cost >= 0) {
        const updatedExpenses = state.expenses.map(expense =>
          expense.name === action.payload.name
            ? { ...expense, cost: expense.cost - action.payload.cost }
            : expense
        );
        return {
          ...state,
          expenses: updatedExpenses,
        };
      } else {
        alert("Cannot decrease the allocation! Insufficient funds");
        return state;
      }
    },
    // redExpenses: (state, action) => {
    //   const updatedExpenses = state.expenses.map(expense =>
    //     expense.name === action.payload.name && expense.cost - action.payload.cost >= 0
    //       ? { ...expense, cost: expense.cost - action.payload.cost }
    //       : expense
    //   );
    //   return {
    //     ...state,
    //     expenses: updatedExpenses,
    //     budget: state.budget + action.payload.cost,
    //   };
    // },
    deleteExpenses: (state, action) => {
      const deletedExpenses = state.expenses.filter(expense => expense.name !== action.payload);
      const deletedExpense = state.expenses.find(expense => expense.name === action.payload);
      return {
        ...state,
        expenses: deletedExpenses,
        budget: state.budget + (deletedExpense ? deletedExpense.cost : 0),
      };
    },
    setBudget: (state, action) => {
      return {
        ...state,
        budget: action.payload,
      };
    },
    cngCurrency: (state, action) => {
      const currency = 
      state.currency.find(currency => currency.id === action.payload);
      if (currency) {
        return {
          ...state,
          selectedCurrency: currency.id,
        };
      }
      return state;
    }
  }
});

export const { addExpenses, reduceExpenses, deleteExpenses, redExpenses, setBudget, cngCurrency } = budgetSlice.actions;

export default budgetSlice.reducer;
