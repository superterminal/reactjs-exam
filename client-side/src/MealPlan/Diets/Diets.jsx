import React from 'react';
import './Diets.css';

import { Link } from 'react-router-dom';

function Diets(state) {
    console.log(state.location.state)
    return (
        <div className="container">
            <h2>Diet List:</h2>
             <h5>Gluten Free</h5>
                <p>Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).</p>
             <h5>Ketogenic</h5>
                <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.</p>
             <h5>Vegetarian</h5>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>
             <h5>Lacto-Vegetarian</h5>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p>
             <h5>Ovo-Vegetarian</h5>
                <p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</p>
             <h5>Vegan</h5>
                <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
             <h5>Pescetarian</h5>
                <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p>
             <h5>Paleo</h5>
                <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p>
             <h5>Primal</h5>
                <p>Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.</p>
             <h5>Whole30</h5>
                <p>Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.</p>
             <h3>Got your diet? Great! <Link to={{
                 pathname: '/meal-plan',
                 state: { ...state.location.state }
             }}>Go back to generating your meal plan!</Link></h3>
        </div>
    )
}

export default Diets;