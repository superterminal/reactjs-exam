import React from 'react';
import './AdvancedSearch.css';

import AdvancedSearchBar from './AdvancedSearchBar/AdvancedSearchBar';
import FoodJokeOrTrivia from '../shared/FoodJokeOrTrivia/FoodJokeOrTrivia';

function AdvancedSearch() {
    return <div className="advancedSearch">
            <h1>Advanced browsing is here</h1>
            <AdvancedSearchBar />
            <FoodJokeOrTrivia opt={'jokes'} />
        </div>
}

export default AdvancedSearch;