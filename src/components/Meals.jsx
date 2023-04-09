import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Meals = () => {
    const {meals} = useLoaderData();
    console.log(meals)
    return (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-12">
            {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal}/>)
            }
        </div>
    );
};

export default Meals;