
import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { useSelector, useDispatch } from 'react-redux';
import { addExpenses, reduceExpenses, deleteExpenses} from '../state/budgetSlice';

const ExpenseItem = (props) => {
    const selectedCurrency = useSelector((state) => state.budget.selectedCurrency);
    const dispatch = useDispatch();
    const { id, cost, name } = props;
  
    const handleDeleteExpense = () => {
      dispatch(deleteExpenses(id));
    };
  
    const increaseAllocation = () => {
      const expense = {
        id: id,
        name: name,
        cost: cost + 10,
      };
  
      dispatch(addExpenses(expense));
    };
  
    const decreaseAllocation = () => {
      const expense = {
        id: id,
        name: name,
        cost: cost - 10,
      };
  
      dispatch(reduceExpenses(expense));
    };
  
    return (
      <tr>
        <td>{name}</td>
        <td>{selectedCurrency} {cost}</td>
        <td><button onClick={increaseAllocation}>+</button></td>
        <td><button onClick={decreaseAllocation}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
      </tr>
    );
}
export default ExpenseItem;