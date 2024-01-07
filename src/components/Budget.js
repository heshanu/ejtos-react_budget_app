
import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch,currancy} = useContext(AppContext);
    const [updateBudget, setUpdateBudget] = useState(budget);
    

    let setBudget = (event) => { dispatch({ type: 'SET_BUDGET', payload:event.target.value })};
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
        <span>Budget:£ </span>

        <input
                        required='required'
                        type='number'
                        id='budget'
                        value={updateBudget}
                    style={{ size: 10 }}
                    onChange={() => {setBudget(updateBudget)}}
                        />
                        
            </div>
            <div>
                <span>Currancy:</span>

       
            </div>
       
        </>
       
    );
};

export default Budget;