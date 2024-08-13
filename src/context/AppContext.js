import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
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

        case 'REMOVE_EXPENSE':
            const totalBudgets = 
            state.expenses.reduce((total, expense) => total + expense.cost, 0) + action.payload.cost;
            if (totalBudgets <= state.budget) {
                const updatedExpenses = state.expenses.map(expense =>
                    expense.name === action.payload.name
                         ? { ...expense, cost: expense.cost - action.payload.cost }
                        : expense
                );
                return {
                    ...state,
                    expenses: updatedExpenses<=0?0:updatedExpenses,
                };
            } else {
                alert("Cannot increase the allocation! Out of funds");
                return state;
            };
        

        case 'RED_EXPENSE':
            const redExpenses = state.expenses.map(expense =>
                expense.name === action.payload.name && expense.cost - action.payload.cost >= 0
                    ? { ...expense, cost: expense.cost - action.payload.cost }
                    : expense
            );
            return {
                ...state,
                expenses: redExpenses,
                budget: state.budget + action.payload.cost,
            };
        case 'DELETE_EXPENSE':
            const deletedExpenses = state.expenses.filter(expense => expense.name !== action.payload);
            const deletedExpense = state.expenses.find(expense => expense.name === action.payload);
            return {
                ...state,
                expenses: deletedExpenses,
                budget: state.budget + (deletedExpense ? deletedExpense.cost : 0),
            };

        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };

        case 'CHG_CURRENCY':
            return {
                ...state,
                selectedCurrency: action.payload,
            };

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    budget: 2000,
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
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let remaining = 0;

    if (state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item) => total + item.cost, 0);
        remaining = state.budget - totalExpenses;
    }

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                budget: state.budget,
                remaining: remaining,
                dispatch,
                currency: state.currency,
                selectedCurrency: state.selectedCurrency
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
