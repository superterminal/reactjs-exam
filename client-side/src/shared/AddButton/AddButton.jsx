import React, { useState, useEffect } from 'react';
import './AddButton.css';

import collectionService from '../../services/collection-service';

function AddButton(props) {
    const [stage, setStage] = useState(null);

    useEffect(() => {
        collectionService.getRecipe(props.recipeId)
            .then(res => res.length ?
                setStage('Remove from recipe collection') :
                setStage('Add to recipe collection'));
    }, [props.recipeId]);

    const addToRecipeCollection = e => {
        e.preventDefault();
        if (stage === 'Add to recipe collection') {
            collectionService.addToCollection({ ...props });
            setStage('Remove from recipe collection')
        } else {
            collectionService.deleteFromCollection(props.recipeId);
            setStage('Add to recipe collection');
        }
    }

    return <button className="AddButton" onClick={addToRecipeCollection}>
        {console.log(stage)}
        {stage}
    </button>
}

export default AddButton;