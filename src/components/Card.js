import React from 'react';


const Card = ({meals}) => {

    return (
        <li className='card'>
            <div className="infosMeal">
              <h3>{meals.strMeal} </h3>
              <h6>Origin : {meals.strArea}</h6>
              <img src={meals.strMealThumb} alt = "image de {meals.strMeal} "></img>
              <p>{meals.strInstructions}</p>
            </div>
        </li>
    );
};

export default Card;