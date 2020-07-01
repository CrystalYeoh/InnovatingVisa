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
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";

import Itemstore from "./IndivitemformComponent";
import _ from "lodash";
import ImageUploading from "react-images-uploading";
import { API_URL } from "../shared/baseUrl";
import axios from "axios";

class Updatestore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      urlselected: "",
      itemnames: "",
      itemselected: "",
      urlselectedid: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
  }
  componentDidMount() {
    axios.post(`${API_URL}/sqlretrieveurl`, this.props).then((res) => {
      this.setState({
        url: res.data,
      });
    });

    // urls.push(<option key={this.state.url[key]['url']}>{index}</option>);
  }
  // var vals = Object.keys(this.state.url).map(function (key) {
  //   return this.state.url[key];
  // });
  // console.log(vals);

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const index = target.id;
    this.setState({
      [name]: value,
    });
    if (name == "urlselected") {
      function getKeyByValue(object, value) {
        return Object.keys(object).find((key) => object[key]["Url"] === value);
      }
      const keyvalue = getKeyByValue(this.state.url, value);
      if (this.state.url[keyvalue] != undefined) {
        this.setState({
          urlselectedid: this.state.url[keyvalue]["id"],
        });

        axios
          .post(`${API_URL}/sqlpostitemquery`, {
            urlselected: this.state.url[keyvalue]["id"],
          })
          .then((res) => {
            this.setState({
              itemnames: res.data,
            });
            console.log(this.state);
          });
      }
    }
  }

  handleSubmit(event) {
    axios
      .post(`${API_URL}/deleteitem`, this.state)
      .then((res) => {})
      .then(this.props.history.push("/storeupdater"));
    console.log("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  onChangeimage(imageList) {
    // data for submit
    const formData = new FormData();
    imageList.forEach((file, i) => {
      formData.append(i, file.file);
    });

    axios
      .post(`${API_URL}/upload-image`, formData)

      .then((res) => {
        //handle success
        this.setState({
          bodyimages: res.data,
        });
      })
      .catch(function (response) {
        //handle error
      });
  }
  render() {
    const rows = [<option key="rowempty"></option>];
    if (this.state.itemnames[0] != undefined) {
      Object.keys(this.state.itemnames).forEach((item, index) => {
        rows.push(
          <option key={item.concat("rows")}>
            {this.state.itemnames[index]["itemname"]}
          </option>
        );
      });
    }

    // const forms = [];
    // for (var index = 0; index < this.state.itemrow; index++) {
    //   forms.push(<Itemstore />);
    // }
    const urls = [<option key="urlempty"></option>];
    if (this.state.url[0] != undefined) {
      Object.keys(this.state.url).forEach((item, index) => {
        urls.push(
          <option key={item.concat("urls")}>
            {this.state.url[index]["Url"]}
          </option>
        );
      });
    }

    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12">
            <h3>Store Updater</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="urlselected" md={2}>
                  Url Selection
                </Label>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="urlselected"
                    value={this.state.urlselected}
                    onChange={this.handleInputChange}
                  >
                    {urls}
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="itemselected" md={2}>
                  Items in store
                </Label>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="itemselected"
                    value={this.state.itemselected}
                    onChange={this.handleInputChange}
                  >
                    {rows}
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="danger">
                    Delete Item
                  </Button>
                  <Link to={"/stores/".concat(this.state.urlselected)}>
                    <Button type="button" color="primary">
                      Go to Store
                    </Button>
                  </Link>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>

        <Itemstore
          key={new Date().getTime()}
          urlselectedid={this.state.urlselectedid}
        />
      </div>
    );
  }
}

export default withRouter(Updatestore);
