import React from 'react'
import './ProductDetails.css';

import Loader from '../../../Loader/Loader';
import ProductService from '../../../../services/product-seach-service';
import Link from '../../../Link/Link';

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.productId = this.props.location.state.productId;
        this.recipeId = this.props.location.state.recipeId;
        this.state = {
            product: {},
            productId: 0,
            recipeId: 0,
            loading: true,
        };
    }

    componentDidMount() {
        ProductService.findProductById(this.productId)
            .then(res => this.setState({
                product: res,
                loading: false
            }));
    }



    render() {
        const { product } = this.state;

        let ingredientImage = 'https://spoonacular.com/cdn/ingredients_500x500/';

        if (this.state.loading) {
            return <div className="row" id="loader">
                        <Loader />
                    </div>
        } else {
            return <div className='container product-details-page'>
            <div className='row'>
                <div className="col-md-6">
                    <div className="item"><img src={ingredientImage + product.image} alt="details"/></div>
                </div>
                <div className="col-md-6">
                    <h2>Product name: {product.name}</h2>
                    <h3>Consistency: {product.consistency}</h3>
                    {/* <Link to={{
                        pathname: `/recipe/${this.recipeId}`,
                        state: {
                            recipeId: this.recipeId
                        }
                        }}>Back to recipe</Link> */}
                </div>
            </div>        
            </div>
        }
    }
    
}

export default ProductDetails;