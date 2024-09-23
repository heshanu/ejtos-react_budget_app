
import React from 'react';
import { useSelector} from 'react-redux';

const Remaining = () => {
    //const { expenses, budget,selectedCurency} = useContext(AppContext);
    const expenses = useSelector((state) => state.budget.expenses);
    const budget = useSelector((state) => state.budget.budget);
    const selectedCurrency = useSelector((state) => state.budget.selectedCurrency);
    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
  
    // Determine the alert type based on the remaining budget
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  
    return (
      <div className={`alert ${alertType}`}>
        <span>Remaining: {selectedCurrency}{budget - totalExpenses}</span>
      </div>
    );
  };

export default Remaining;