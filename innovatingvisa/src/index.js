import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import classnames from 'classnames';

function Listing({ listing }) {
  if (!listing) {
    return null
  }

  // const { id, image, title, address, description, price } = listing
  const id = listing[0]
  const image = listing[1]
  const title = listing[2]
  const address = listing[3]
  const description = listing[4]
  const price = listing[5]

  const columnClasses = classnames('column', 'col-4', 'col-xs-12')
  const cardClasses = classnames('card')

  return (
    <div className={columnClasses} style={{ margin: '1rem 0' }}>
      
      <div className={cardClasses}>
        <div className="card-image">
          <img className="img-responsive" src={`${image}`} alt={address} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{id}</div>
          <div className="card-title h6">&#36; {price}</div>
          <div className="card-subtitle text-gray">{address}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          <button className="btn btn-primary" to={`/details/${id}`}>
            Go to merchant
          </button>
        </div>
      </div>
    </div>
  )
}

class MyNavbar extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Visa Marketplace</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const sampleMerchant = [['0', 'logo192.png', 'KFC', 'address', 'description', '5'], ['1', 'logo192.png', 'Burger King', 'address', 'description', '5']]
ReactDOM.render(
  <React.StrictMode>
    <MyNavbar />
    <div className="columns">
      {sampleMerchant.map(
        listing => (<Listing listing={listing} />)
      )}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
