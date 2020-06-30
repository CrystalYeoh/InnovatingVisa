import React, {Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class Trial extends Component {
    constructor(props) {
        super(props);
        this.state= {
        
    }
    handleSubmit(event) {
        console.log("sending event")
        
        axios.post('/merchantapi', this.state)
            .then(function (response) {
                console.log(response);
            })
        console.log("Current State is: " + JSON.stringify(this.state));
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Button type = "submit" onClick = {this.handleSubmit}>
                    Click here!
                </Button>
            </div>
        );
    }

}

export default Trial