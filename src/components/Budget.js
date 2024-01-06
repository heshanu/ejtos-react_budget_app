
import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,dispatch } = useContext(AppContext);

    
    const updateBudget = () => { 
        if (budget < 2000) {
            dispatch({
            type:'SET_BUDGET',
            payload:budget,
        })}
    }
    return (
        <>
         <div className='alert alert-secondary'>
        <span>Budget:£ </span>

        <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                    style={{ size: 10 }}
                        onChange={(event) =>updateBudget(event.target.value)}
                        />
                        
        </div>
        </>
       
    );
};

export default Budget;