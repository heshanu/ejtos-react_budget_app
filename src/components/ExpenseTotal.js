import React from 'react';
import { useSelector } from 'react-redux';
const ExpenseTotal = () => {
    const expenses = useSelector((state) => state.budget.expenses);
    const selectedCurrency = useSelector((state) => state.budget.selectedCurrency);
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far:{ selectedCurrency}:{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
