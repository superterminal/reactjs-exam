import React from 'react'
import './Details.css';

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.recipe = this.props.location.state.recipe;
    }

    render() {
        return (
            <div class='container product-details-page'>
                <div class='row'>
                    <div class="col-md-8">
                        <div class="item"><img src={this.recipe.image} /></div>
                    </div>
                    <div class="col-md-4">
                        <h2>{this.recipe.label}</h2>
                        <h5>Product sub title</h5>
                        <div class="price">
                            <p>$ 1900.00 <del>$ 2000.00</del></p>
                        </div>
                        <hr/>
                        <div class="product-info">
                            <div class='row'>
                            <div class="col-md-6">
                                <p class="title">manufacturer:</p>
                            </div>
                            <div class="col-md-6">
                                <p class="data"> Brand Name</p>
                            </div>
                            </div>
                            <div class='row'>
                            <div class="col-md-6">
                                <p class="title">Materials:</p>
                            </div>
                            <div class="col-md-6">
                                <p class="data"> Brand Name</p>
                            </div>
                            </div>
                            <div class='row'>
                            <div class="col-md-6">
                                <p class="title">Availability:</p>
                            </div>
                            <div class="col-md-6">
                                <p class="data"><i class="far fa-check-circle"></i> In stock</p>
                            </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="product-info">
                            <div class='row'>
                            <div class="col-md-6">
                                <p class="title">Favourites:</p>
                            </div>
                            <div class="col-md-6">
                                <p class="data"><i class="far fa-heart"></i> Add to favourites</p>
                            </div>
                            </div>
                            <div class='row'>
                            <div class="col-md-6">
                                <p class="title">Wishlist:</p>
                            </div>
                            <div class="col-md-6">
                                <p class="data"><i class="far fa-eye"></i> Add to Watch list</p>
                            </div>
                            </div>
                            <div class='row'>
                            <div class="col-md-6">
                                <p class="title">collection:</p>
                            </div>
                            <div class="col-md-6">
                                <p class="data"><i class="far fa-star"></i> Add to collection</p>
                            </div>
                            </div>
                        </div>
                        <hr/>
                        <div class="product-info">
                            <div class='row'>
                            <div class="col-md-6">
                                <p class="title">Available Colors:</p>
                            </div>
                            <div class="col-md-6">
                                <ul class="colors">
                                <li class="red"> </li>
                                <li class="blue active"> </li>
                                <li class="green"> </li>
                                <li class="yellow"> </li>
                                </ul>
                            </div>
                            </div>
                            <div class='row'>
                            <div class="col-md-6">
                                <p class="title">Wishlist:</p>
                            </div>
                            <div class="col-md-6">
                                <ul class="sizes">
                                <li><a href="#">S</a></li>
                                <li class="active"><a href="#">M</a></li>
                                <li><a href="#">L</a></li>
                                <li><a href="#">XL</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>

            </div>
        )
    }
    
}

export default Details;