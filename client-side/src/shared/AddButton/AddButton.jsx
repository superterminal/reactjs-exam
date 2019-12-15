import React, { useState, useEffect } from 'react';
import './AddButton.css';

import collectionService from '../../services/collection-service';

function AddButton(props) {
    const [stage, setStage] = useState(null);
    const [message, setMessage] = useState('');

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
            setStage('Remove from recipe collection');
            setMessage('Successfully added to collection!');
        } else {
            collectionService.deleteFromCollection(props.recipeId);
            setStage('Add to recipe collection');
            setMessage('Successfully removed from collection!');
        }
    }

    return <React.Fragment> 
        <h6>{message}</h6>
        <button className="AddButton" onClick={addToRecipeCollection}>
            {stage}
        </button>
    </React.Fragment>
}

export default AddButton;