import { useEffect, useState } from 'react'
import MealItem from './MealItem';



const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('http://localhost:3001/meals');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setMeals(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchMeals();
    }
    , []);
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItem
                    key={meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                    image={meal.image}
                    />
              ))}

        </ul>
    )
};

export default Meals