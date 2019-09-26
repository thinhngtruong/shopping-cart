import React from 'react';

class ProductItem extends React.Component {
  showRating = (rating) => {
    var result = [];
    for (var i = 1; i <= rating; i++) {
      result.push(
        <li key={i}>
          <i className="fa fa-star" />
        </li>
      )
    }
    for (var j = 1; j <= 5 - rating; j++) {
      result.push(
        <li key={i + j}>
          <i className="fa fa-star-o" />
        </li>
      )
    }
    return result;
  }

  addToCart = (product) => {
    this.props.addToCart(product);    
  }

  render() {
    var { product } = this.props
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <div className="mask waves-light waves-effect waves-light" />
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                {product.name}
              </strong>
            </h4>
            <ul className="rating">
              {this.showRating(product.rating)}
            </ul>
            <p className="card-text">
              {product.description}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}</span>
              <span className="right">
                <div className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" 
                data-original-title="Add to Cart"
                onClick={() => this.addToCart(product)}>
                  <i className="fa fa-shopping-cart" />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;
