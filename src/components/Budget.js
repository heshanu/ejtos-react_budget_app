import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency, selectedCurrency } = useContext(AppContext);
    const [updateBudget, setUpdateBudget] = useState(budget);
    const [updateCurrency, setUpdateCurrency] = useState(selectedCurrency);

    const updateBudgetValue = (event) => {
        const newBudget = event.target.value;
        setUpdateBudget(newBudget);
        dispatch({ type: 'SET_BUDGET', payload: newBudget });

        console.log(`budget`, budget);
        console.log(`updateBudget`, updateBudget);
    };

    const updateCurrencyValue = (event) => {
        const newCurrency = event.target.value;
        setUpdateCurrency(newCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });

        //alert(newCurrency);
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
                    {currency.map((curr, index) => (
                        <option key={index} value={curr.id}>{curr.name}</option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Budget;
