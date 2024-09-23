
import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpenses,reduceExpenses } from '../state/budgetSlice';

const AllocationForm = (props) => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const budget = useSelector((state) => state.budget.budget);
    const selectedCurrency = useSelector((state) => state.budget.selectedCurrency);
    const remaining=useSelector((state)=>state.budget.remaining);
    const dispatch = useDispatch();

    const submitEvent = () => {

        if(cost > remaining) {
                alert("The value cannot exceed remaining funds"+selectedCurrency+remaining);
                setCost("");
                return;
            }
        if (cost > budget) {
            alert("The value cannot exceed budget"+selectedCurrency+budget);
            setCost("");
            return;
        }
        
        const expense = {
            name: name,
            cost: parseInt(cost),
          };
      
          if (action === "Reduce") {
            dispatch(reduceExpenses(expense));
          } else {
            dispatch(addExpenses(expense));
          }
            
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                  <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                  </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                  </select>
                   <span>{selectedCurrency}:</span>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                        </input>

                    <button className="btn btn-primary" 
                    onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
                </div>

        </div>
    );
};

export default AllocationForm;