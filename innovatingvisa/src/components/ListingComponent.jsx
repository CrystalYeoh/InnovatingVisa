import React from 'react';

import classnames from 'classnames';

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.listing = props.listing;
        this.id = this.listing[0]
        this.image = this.listing[1]
        this.title = this.listing[2]
        this.address = this.listing[3]
        this.description = this.listing[4]
        this.price = this.listing[5]

        this.columnClasses = classnames('column', 'col-4', 'col-xs-12')
        this.cardClasses = classnames('card')
    }

    // const { id, image, title, address, description, price } = listing
    
    render() {
        return (
            <div className={this.columnClasses} style={{ margin: '1rem 0' }}>
              
              <div className={this.cardClasses}>
                <div className="card-image">
                  <img className="img-responsive" src={`${this.image}`} alt={this.address} />
                </div>
                <div className="card-header">
                  <div className="card-title h5">{this.id}</div>
                  <div className="card-title h6">&#36; {this.price}</div>
                  <div className="card-subtitle text-gray">{this.address}</div>
                </div>
                <div className="card-body">{this.description}</div>
                <div className="card-footer">
                  <button className="btn btn-primary" to={`/details/${this.id}`}>
                    Go to merchant
                  </button>
                </div>
              </div>
            </div>
        )
    }
}


export default Listing

