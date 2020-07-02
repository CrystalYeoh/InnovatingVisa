import React from "react";

import Listing from './ListingComponent';
import {Form, Input, FormGroup, Button, Label, CardColumns, Row} from 'reactstrap';
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

// const useStyles = makeStyles((theme) => ({
//     control: {
//       padding: theme.spacing(2),
//     },
//   }));
  

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // state is the current listings shown in the dashboard
        this.state = { 
            data: [],
            search: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pullAllListings = this.pullAllListings.bind(this);
        this.pullAllListings();

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const search = target.search;
        console.log(value)
        this.setState({
          search : value,
        });
      }
    
    handleSubmit(event) {
        let currentComponent = this
        axios.post('/getSearchListing', this.state)
        .then((response) => {
            let tmpArr = []
            for (var i = 0; i < Object.keys(response.data).length; i++) {
                tmpArr.push(response.data[i])
            }
            this.setState({
                data: tmpArr,
            })
            // console.log(this.state)
        })
        event.preventDefault();
      }

    pullAllListings() {
        let currentComponent = this
        console.log("Pulling all merchants")
        axios.post('/getAllListings', null)
            .then((response) => {
                let tmpArr = []
                for (var i = 0; i < Object.keys(response.data).length; i++) {
                    tmpArr.push(response.data[i])
                }
                this.setState({
                    data: tmpArr,
                })
                // console.log(this.state)
            })
    }

   
    render() {
        if (this.state.data) {
            console.log(this.state.data)
            const rows = [<div key="rowempty"></div>];
            Object.keys(this.state.data).forEach((item, index) => {
                rows.push(<Listing key={item} listing={this.state.data[index]} />);
            });

            return (
                <div>
                    <Form inline style={{display: 'flex', justifyContent: 'center' }}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="search" className="mr-sm-2">Search:</Label>
                            <Input type="Search" name="search" id="search" placeholder="" onChange={this.handleInputChange}/>
                            <Button variant="outline-success" onClick = {this.handleSubmit}>Search</Button>
                        </FormGroup>
                    </Form>
                    
                        {/* {this.state.data.map(
                        listing => (
                            <Listing listing={listing}/>)
                        )} */}
                    <div className="container">
                        <div className="row row-content">
                            <div>
                                <Row>
                                    <div>
                                        <CardColumns>{rows}</CardColumns>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    NOTHING FOUND
                </div>
            )
        }
            
        
    }
}

export default Dashboard
