import React from 'react'
import './ProductDetails.css';

import Loader from '../../../Loader/Loader';
import ProductService from '../../../../services/product-seach-service';

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.ingredient= this.props.location.state.ingredient;
        this.state = {
            product: {},
            loading: true,
        };
    }

    componentDidMount() {
        ProductService.findProductById(this.ingredient.id)
            .then(res => this.setState({
                ingredient: res,
                loading: false
            }));
    }

    render() {
        const { ingredient } = this.state;
        let ingredientImage = 'https://spoonacular.com/cdn/ingredients_500x500/';

        if (this.state.loading) {
            return <div className="row" id="loader">
                        <Loader />
                   </div>
        } else {
            return (
                <div className='container product-details-page'>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="item"><img src={ingredientImage + ingredient.image} alt="details"/></div>
                        </div>
                        <div className="col-md-6">
                            <h2>Product name: {ingredient.name}</h2>
                            <h3>Consistency: {ingredient.consistency}</h3>
                        </div>
                    </div>        
            </div>)
        }
    }
    
}

export default ProductDetails;