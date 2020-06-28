import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './MerchantSortingPage.css';

const CreateVISAReady = (props) => {
    return (
        <section>
          <div id="question" >
            <h1 >Are you an existing VISA merchant?</h1>
          </div>
          <div id="choices">
            <Link to = "/merchantCreateAcc">
              <Button color="danger" size="lg">Yes</Button>
            </Link>
            <Button color="primary" size="lg">No</Button>
            
            
          </div>
        </section>
      );
    }
export default  CreateVISAReady
  