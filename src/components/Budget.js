
import React, { useContext,useEffect,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency,selectedCurency} = useContext(AppContext);
    const [updateBudget, setUpdateBudget] = useState(0);
    const [updateCurrency, setUpdateCurrency] = useState("");
    const [currentCurrency, setCurrentCurrency] = useState(selectedCurency);
  
    const updateBudgetValue = (event) => {
        setUpdateBudget(event.target.value);
        dispatch({ type: 'SET_BUDGET', payload: updateBudget })

     
        console.log(`budget`, budget);
        console.log(`updateBudget`, updateBudget);
    };

    const updateCurrenyValue = (event) => {
        setUpdateCurrency(event.target.value);
        setCurrentCurrency(event.target.value);
        dispatch({ type: 'CHG_CURRENCY', payload: updateCurrency })
        //dispatch({ type: 'CHG_CURRENCY_CURRENT', payload: currentCurrency })
        alert(updateCurrency);  
    }
    
    // const updatedCurrencyCurr = (event) => {
    //     setUpdateCurrency(event.target.value);
    //     dispatch({ type: 'CHG_CURRENCY_CURRENT', payload: updateCurrency})
    // }
    
    
    useEffect(() => {
        setUpdateCurrency(currentCurrency);
        setCurrentCurrency(currentCurrency);
    }, [currentCurrency]);

    // const updateBudgetValue = () => {     
        
    //     dispatch({
    //         type: 'SET_BUDGET',
    //         payload: updateBudget
    //     });
    //     // dispatch({
    //     //     type: 'CHG_CURRENCY',
    //     //     payload: currancy
    //     // });
    // }

    return (
        <>
            
        <div className='alert alert-secondary'>
                <span>Budget{currentCurrency}</span>        
                

        <input
                    required='required'
                    type='number'
                    id='budget'
                    value={updateBudget}
                    style={{ size: 10 }}
                    onChange={(event) => updateBudgetValue(event)}
        />
                        
        </div>

        <div className='alert alert-secondary'>
        
                
        <span> currancy</span>
        {/* <input
                    required='required'
                    type='number'
                    id='budget'
                    value={updateBudget}
                    style={{ size: 10 }}
                    onChange={(event) => updateBudgetValue(event)}
                        /> */}
                <select onChange={(event) => { updateCurrenyValue(event) }}>
                    {currency.map((curr, index) => { 
                        return <option 
                        key={index} value={curr.id}>{curr.name}</option>
                    })}
                    
        </select>
                        
        </div>    
               
        </>
       
    );
};

export default Budget;