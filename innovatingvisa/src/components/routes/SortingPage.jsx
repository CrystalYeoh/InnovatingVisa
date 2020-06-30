import React from 'react';
import { Button } from 'reactstrap';
import { Link} from 'react-router-dom';
import './SortingPage.css';

const SortingPage = (props) => {
    return (
      <section>
        <div id="question" >
          <h1 >Would you like to sell or to buy?</h1>
        </div>
        <div id="choices">
          <Button color="danger" size="lg">Buy</Button>
          <Link to ="/merchantSignUp">
            <Button color="primary" size="lg">Sell</Button>
          </Link>
          
        </div>
      </section>
    );
  }
export default SortingPage
