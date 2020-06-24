import React from "react";

import Listing from './ListingComponent';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.listings = [['0', 'logo192.png', 'KFC', 'address', 'description', '5'], ['1', 'logo192.png', 'Burger King', 'address', 'description', '5']];
    }
    
    render() {
        return (
            <div className="columns">
                {this.listings.map(
                listing => (<Listing listing={listing} />)
        )}
    </div>
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