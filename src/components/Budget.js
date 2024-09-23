import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBudget, cngCurrency } from '../state/budgetSlice';

const Budget = () => {
   const budget = useSelector((state) => state.budget.budget);
   const selectedCurrency = useSelector((state) => state.budget.selectedCurrency);
   //store curreny in initial state
   const currencyOptions = useSelector((state) => state.budget.currency); 
   const dispatch = useDispatch();

   const [updateBudget, setUpdateBudget] = useState(budget);
   const [updateCurrency, setUpdateCurrency] = useState(selectedCurrency);

    const updateBudgetValue = (event) => {
        const newBudget = event.target.value;
        setUpdateBudget(newBudget);
        dispatch(setBudget(newBudget));
        console.log(`budget`,budget);
        console.log(`updateBudget`, updateBudget);
    };

    const updateCurrencyValue = (event) => {
        const newCurrency = event.target.value;
        setUpdateCurrency(newCurrency);
        dispatch(cngCurrency(newCurrency));
    };

    useEffect(() => {
        setUpdateCurrency(selectedCurrency);
    }, [selectedCurrency]);

    return (
        <>
            <div className='alert alert-secondary'>
                <span>Budget: {updateCurrency}</span>
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={updateBudget}
                    style={{ size: 10 }}
                    onChange={updateBudgetValue}
                />
            </div>

            <div className='alert alert-secondary'>
                <span>Currency:</span>
                <select value={updateCurrency} onChange={updateCurrencyValue}>
                    {currencyOptions.map((curr, index) => (
                        <option key={index} value={curr.id}>{curr.name}</option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Budget;
