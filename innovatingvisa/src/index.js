import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MyNavbar from './components/NavbarComponent';
import Listing from './components/DashboardComponent';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
