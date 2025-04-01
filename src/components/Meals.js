import { useEffect, useState } from 'react'


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
            { 
                meals.map((meal, index) => (
                    <li key={index}>{meal.name}</li>// list of meals
                      ))
                }

        </ul>
    )
};

export default Meals