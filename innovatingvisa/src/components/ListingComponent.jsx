import React from 'react';

import classnames from 'classnames';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import Grid from "@material-ui/core/Grid";

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.listing = props.listing;
        // alert(this.listing)
        this.id = this.listing["companyName"]
        console.log(this.id)
        this.image = 'logo192.png'
        this.title = this.listing["companyName"]
        this.address = this.listing["addr"]
        this.description = this.listing["descr"]

        // this.columnClasses = classnames('column', 'col-4', 'col-xs-12')
        // this.cardClasses = classnames('card')
    }

    // const { id, image, title, address, description, price } = listing
    
    render() {
        return (
          
          <div>
              <Card border="info" style={{ width: '18rem' }}>
                <CardImg variant="top" src={`${this.image}`} />
                <CardBody>
                  <CardTitle>{this.id}</CardTitle>
                  <CardText>
                    {this.address}
                  </CardText>
                  <Button variant="primary" to={`/details/${this.id}`}>Go somewhere</Button>
                </CardBody>
              </Card>
          </div>
          

            // <div className={this.columnClasses} style={{ margin: '1rem 0' }}>
              
            //   <Card border="primary" style={{ width: '18rem' }}>
            //     <div className="card-image">
            //       <img className="img-responsive" src={`${this.image}`} alt={this.address} />
            //     </div>
            //     <div className="card-header">
            //       <div className="card-title h5">{this.id}</div>
            //       <div className="card-title h6">&#36; {this.price}</div>
            //       <div className="card-subtitle text-gray">{this.address}</div>
            //     </div>
            //     <div className="card-body">{this.description}</div>
            //     <div className="card-footer">
            //       <button className="btn btn-primary" to={`/details/${this.id}`}>
            //         Go to merchant
            //       </button>
            //     </div>
            //   </Card>
            // </div>
        )
    }
}


export default Listing

