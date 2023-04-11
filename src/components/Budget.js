import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        let newBudget = event.target.value;

        if (newBudget > 20000) {
            //newBudget = 20000;
            alert('Budget cannot exceed 20,000.');
            return;
        }

        // if statement to check expenses

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <label className="budget-label">Budget {currency}   </label>
            <input className="budget-input" type="number" value={budget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;