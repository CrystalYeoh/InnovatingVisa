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
import { Link } from "react-router-dom";
import Header from "./UrlHeaderComponent";
import Footer from "./UrlFooterComponent";
import UrlBody from "./UrlBody";
import { API_URL } from "../shared/baseUrl";
import axios from "axios";

class Url extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
  }
  componentDidMount() {
    axios.post(`${API_URL}/sqlposturlquery`, this.props.match).then((res) => {
      this.setState({
        url: res.data,
      });
      console.log(this.State);
    });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header
          headertext={this.state.url.Headertext}
          headersubtext={this.state.url.Headersubtext}
        />

        <UrlBody
          bodytext={this.state.url.Bodytext}
          bodytextrow={this.state.url.Bodytextrow}
          bodyheading={this.state.url.Bodyheading}
          bodyimages={this.state.url.Bodyimages}
        />

        <Footer
          footertext={this.state.url.Footertext}
          facebookurl={this.state.url.Facebookurl}
          twitterurl={this.state.url.Twitterurl}
          instagramurl={this.state.url.Instagramurl}
          phonenumber={this.state.url.Phonenumber}
          facebookchecked={this.state.url.Facebookchecked}
          instagramchecked={this.state.url.Instagramchecked}
          twitterchecked={this.state.url.Twitterchecked}
        />
      </div>
    );
  }
}

export default Url;
