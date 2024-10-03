import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBudget, cngCurrency } from '../state/budgetSlice';
import { changeUsername } from '../state/nameSlice';

const Budget = () => {
   const budget = useSelector((state) => state.budget.budget);
   const selectedCurrency = useSelector((state) => state.budget.selectedCurrency);
   //store curreny in initial state

   const currencyOptions = useSelector((state) => state.budget.currency); 
   const setChangeUsername = useSelector((state) => state.username.username);

   const dispatch = useDispatch(); 

   const [updateBudget, setUpdateBudget] = useState(budget);
   const [updateCurrency, setUpdateCurrency] = useState(selectedCurrency);
   const [userName,setUserName]=useState(setChangeUsername);

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

    const handleUserName=()=>{
        dispatch(setUserName("Umayanga"));
        return changeUsername("Umayanga");

    }

    useEffect(() => {
        setUpdateCurrency(selectedCurrency);
    }, [selectedCurrency]);

    return (
        <>
            <div className='alert alert-secondary'>
                <button onClick={handleUserName}>Change User Name</button>
                <span>{userName}:Budget: {updateCurrency}</span>
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
