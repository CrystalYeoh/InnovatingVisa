import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './LinkAcquirer.css';

const LinkAcquirer = (props) => {
    return (
        <section>
          <div className="question" >
            <h1 >Please link up with your acquirer to register to be a VISA Merchant. </h1>
            <p>The following are Singapore-based acquirers:</p>
          </div>
          <div className="choices">
            <a href = "https://www.dbs.com.sg/sme/default.page?utm_source=google&utm_medium=organic&utm_campaign=seo">
              <img src = {require('./../../shared/media/dbs.png')}/>
            </a>
            <a href = "https://www.ocbc.com/group/group-home.html">
              <img src = {require('./../../shared/media/ocbc.png')} height = '50'/>
            </a>
            <a href = "https://www.citibank.com.sg/portal/bluehome/index.htm">
              <img src = {require('./../../shared/media/citibank.jpg')}/>
            </a>
            <a href = "https://www.sc.com/sg/">
              <img src = {require('./../../shared/media/standard.png')} height = '70'/>
            </a>
            
            
          </div>
        </section>
      );
    }
export default  LinkAcquirer
  