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
  Breadcrumb,
  BreadcrumbItem,
  CardColumns,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import Storecard from "./Storecardcomponent";
import Sidebar from "./SidebarComponent";
import { API_URL } from "../shared/baseUrl";
import axios from "axios";
import Style from "./routes/store.css";

import Header from "./UrlHeaderComponent";

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
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const rows = [<div key="rowempty"></div>];
    const categorys = [];
    if (this.state.itemnames[0] != undefined) {
      Object.keys(this.state.itemnames).forEach((item, index) => {
        console.log(this.state.itemnames[index]["category"]);
        categorys.push(this.state.itemnames[index]["category"]);
        rows.push(<Storecard key={item} item={this.state.itemnames[index]} />);
      });
    }
    console.log(this.props.match.params["url"]);
    const items = categorys.filter(onlyUnique);
    return (
      <div style={Style}>
        <Header
          headertext={this.state.url.Headertext}
          image={this.state.url.primaryimage}
        />
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={"/sites/".concat(this.props.match.params["url"])}>
              <a>Home</a>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Store</BreadcrumbItem>
        </Breadcrumb>
        <Sidebar items={items} />

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
    );
  }
}

export default withRouter(Store);
