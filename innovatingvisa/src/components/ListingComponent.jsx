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
        this.id = this.listing["companyName"]
        this.image = 'logo192.png'
        this.title = this.listing["companyName"]
        this.address = this.listing["addr"]
        this.description = this.listing["descr"]
    }

    componentWillReceiveProps(nextProps) {
      this.props = nextProps
      this.listing = this.props.listing;
      this.id = this.listing["companyName"]
      this.image = 'logo192.png'
      this.title = this.listing["companyName"]
      this.address = this.listing["addr"]
      this.description = this.listing["descr"]
    }

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
        )
    }
}


export default Listing

