import React, { Component } from "react";
import {
  Col,
  Button,
  Label,
  Input,
  FormText,
  Row,
  Form,
  FormGroup,
  CardDeck,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Storecard from "./Storecardcomponent";
import Sidebar from "./SidebarComponent";
import { API_URL } from "../shared/baseUrl";
import axios from "axios";
import Header from "./UrlHeaderComponent";
import "../shared/store.css";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { urlselected: "", url: "", itemnames: "" };
  }
  componentDidMount() {
    console.log(this.props.match);
    axios
      .post(`${API_URL}/sqlretrieveurlid`, this.props.match.params)
      .then((res) => {
        this.setState({
          urlselected: res.data[0]["id"],
          url: res.data[0],
        });
        console.log(this.state);
      })
      .then((res) => {
        console.log(this.state);
        axios.post(`${API_URL}/sqlpostitemquery`, this.state).then((res) => {
          console.log(res);
          this.setState({
            itemnames: res.data,
          });
          console.log(this.state);
        });
      });
  }
  render() {
    const rows = [<div key="rowempty"></div>];
    if (this.state.itemnames[0] != undefined) {
      Object.keys(this.state.itemnames).forEach((item, index) => {
        console.log(this.state.itemnames[index]);
        rows.push(<Storecard key={item} item={this.state.itemnames[index]} />);
      });
    }
    const items = [
      { name: "home", label: "Home" },
      { name: "billing", label: "Billing" },
      { name: "settings", label: "Settings" },
    ];
    console.log(this.state);
    return (
      <div>
        <Sidebar items={items} />

        <div>
          <Header headertext={this.state.url.Headertext} />
          <CardDeck>{rows}</CardDeck>
        </div>
      </div>
    );
  }
}

export default withRouter(Store);
