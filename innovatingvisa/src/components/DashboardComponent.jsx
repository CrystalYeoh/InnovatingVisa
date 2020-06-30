import React from "react";

import Listing from './ListingComponent';
import { Button } from "reactstrap";
import axios from 'axios'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        // state is the current listings shown in the dashboard
        this.listings = [[]];
        this.pullAllListings = this.pullAllListings.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.pullAllListings();
    }
    
    

    pullAllListings(event) {
        alert("OK")
        let currentComponent = this
        console.log("Pulling all merchants")
        axios.post('/getAllListings', null)
            .then(function(response) {
                console.log(response.data)
                // console.log(Object.keys(response.data).length)
                for (var i = 0; i < Object.keys(response.data).length; i++) {
                    // console.log(response.data[i])
                    currentComponent.listings[i] = response.data[i]
                    console.log(JSON.stringify(response.data[i]["addr"]))
                    // console.log(currentComponent.listings[i])
                }
            })
            
            // .then(response => {
            //     console.log("OK")
            //     console.log(response)
            //     return response
            // })
            // .then(json => {
            //     console.log(json)
            //     this.listings = json
            // })
            // console.log("OK")
            console.log(currentComponent.listings[0])
            // console.log(currentComponent.listings[0]["companyName"])
    }

    // componentDidMount() {
    //     this.pullAllListings();
    // }


    render() {
        return (
            <div>
                <Button onClick={this.pullAllListings}>
                    Hi
                </Button>
                {this.listings.map(
                    listing => (
                <Listing listing={listing} />)
                )}
            </div>
            // <div className="columns" >
            //     {this.listings.map(
            //         listing => (
            //     <Listing listing={listing} />)
            //     )}
            // </div>
            
        )
    }
}

export default Dashboard

// const sampleMerchant = [['0', 'logo192.png', 'KFC', 'address', 'description', '5'], ['1', 'logo192.png', 'Burger King', 'address', 'description', '5']]
// ReactDOM.render(
//   <React.StrictMode>
//     <MyNavbar />
//     <div className="columns">
//       {sampleMerchant.map(
//         listing => (<Listing listing={listing} />)
//       )}
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// );