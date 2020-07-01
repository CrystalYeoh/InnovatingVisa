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
import { withRouter } from "react-router-dom";
import Header from "./UrlHeaderComponent";
import Footer from "./UrlFooterComponent";
import UrlBody from "./UrlBody";
import _ from "lodash";
import ImageUploading from "react-images-uploading";
import { API_URL } from "../shared/baseUrl";
import axios from "axios";
import Urlmainimage from "./Uploadurlimage";

class UrlCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      headertext: "",
      headersubtext: "",
      bodytextrow: 1,
      bodyheading: [""],
      bodytext: [""],
      bodyimages: [""],
      footertext: "",
      twitterurl: "",
      facebookurl: "",
      twitterchecked: false,
      facebookchecked: false,
      instagramchecked: false,
      maxMbFileSize: 5 * 1024 * 1024, // 5Mb
      instagramurl: "",
      phonenumber: "",
      frontimage: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.myCallback = this.myCallback.bind(this);
  }

  myCallback(dataFromChild) {
    this.setState({
      frontimage: dataFromChild,
    });
    console.log(this.state);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const index = target.id;
    const arraystring = [];
    console.log(target.id);

    if (name === "bodytextrow") {
      for (var i = 0; i < value; i++) {
        arraystring.push("");
      }
      this.setState({
        bodytext: arraystring,
        bodyheading: arraystring,
      });
    }

    if (name == "bodytext") {
      const variable = _.cloneDeep(this.state.bodytext);
      const index2 = Number(index.split("_")[0]);

      variable.splice(index2, 1, value);
      this.setState({
        [name]: variable,
      });
    } else if (name == "bodyheading") {
      const var2 = _.cloneDeep(this.state.bodyheading);
      const index2 = Number(index.split("_")[0]);
      var2.splice(index2, 1, value);

      this.setState({
        [name]: var2,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(event) {
    axios
      .post(`${API_URL}/sqlposturl`, this.state)
      .then((res) => {
        console.log(res.data);
      })
      .then(this.props.history.push("/sites/".concat(this.state.url)));

    console.log("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  onChangeimage(imageList) {
    console.log(this.state);

    // data for submit
    const formData = new FormData();
    imageList.forEach((file, i) => {
      formData.append(i, file.file);
    });

    axios
      .post(`${API_URL}/upload-image`, formData)

      .then((res) => {
        console.log(res.data);
        console.log(this.state.bodytext);

        console.log(res.data);
        //handle success
        console.log(this.state.bodytext);
        this.setState({
          bodyimages: res.data,
        });
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    console.log(this.state);
  }
  render() {
    const twittercontent = this.state.twitterchecked ? (
      <div>
        <FormGroup row>
          <Label htmlFor="twitterurl" md={2}>
            Twitter Url
          </Label>
          <Col md={10}>
            <Input
              type="text"
              id="twitterurl"
              name="twitterurl"
              placeholder="Twitter Url"
              value={this.state.twitterurl}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
      </div>
    ) : null;
    const facebookcontent = this.state.facebookchecked ? (
      <div>
        <FormGroup row>
          <Label htmlFor="facebookurl" md={2}>
            Facebook Url
          </Label>
          <Col md={10}>
            <Input
              type="text"
              id="facebookurl"
              name="facebookurl"
              placeholder="Facebook Url"
              value={this.state.facebookurl}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
      </div>
    ) : null;

    const instagramcontent = this.state.instagramchecked ? (
      <div>
        <FormGroup row>
          <Label htmlFor="twitterurl" md={2}>
            Twitter Url
          </Label>
          <Col md={10}>
            <Input
              type="text"
              id="instagramurl"
              name="instagramurl"
              placeholder="Instagram Url"
              value={this.state.instagramurl}
              onChange={this.handleInputChange}
            />
          </Col>
        </FormGroup>
      </div>
    ) : null;

    const rows = [];
    for (var index = 0; index < this.state.bodytextrow; index++) {
      rows.push(
        <div>
          <FormGroup row>
            <Label htmlFor="bodyheading" md={2}>
              Body Heading
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id={index.toString().concat("_heading")}
                name="bodyheading"
                placeholder="Bodyheading"
                value={this.state.bodyheading[index]}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="bodytext" md={2}>
              Bodytext
            </Label>
            <Col md={10}>
              <Input
                type="textarea"
                id={index.toString().concat("_body")}
                name="bodytext"
                placeholder="Bodytext"
                rows="12"
                value={this.state.bodytext[index]}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
        </div>
      );
    }
    console.log(this.state.bodytext);
    return (
      <div className="container">
        <Header
          headertext={this.state.headertext}
          headersubtext={this.state.headersubtext}
        />
        <div className="row row-content">
          <div className="col-12">
            <h3>Website Creator</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="url" md={2}>
                  URL
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="url"
                    name="url"
                    placeholder="URL"
                    value={this.state.url}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <Urlmainimage callbackFromParent={this.myCallback} />
              <FormGroup row>
                <Label htmlFor="headertext" md={2}>
                  Headertext
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="headertext"
                    name="headertext"
                    placeholder="Headertext"
                    value={this.state.headertext}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="headersubtext" md={2}>
                  Header Subtext
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="headersubtext"
                    name="headersubtext"
                    placeholder="Header Subtext"
                    value={this.state.headersubtext}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="headersubtext" md={2}>
                  No. Of Rows of Body Text
                </Label>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="bodytextrow"
                    value={this.state.bodytextrow}
                    onChange={this.handleInputChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Input>
                </Col>
              </FormGroup>
              Body image Upload
              <ImageUploading
                onChange={this.onChangeimage}
                maxNumber={this.state.bodytextrow}
                multiple
                maxFileSize={this.state.maxMbFileSize}
                acceptType={["jpg", "gif", "png"]}
              >
                {({ imageList, onImageUpload, onImageRemoveAll }) => (
                  // write your building UI
                  <div>
                    <button type="button" onClick={onImageUpload}>
                      Upload images
                    </button>
                    <button type="button" onClick={onImageRemoveAll}>
                      Remove all images
                    </button>

                    {imageList.map((image) => (
                      <div key={image.key}>
                        <img src={image.dataURL} />
                        <button type="button" onClick={image.onUpdate}>
                          Update
                        </button>
                        <button type="button" onClick={image.onRemove}>
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
              {rows}
              <UrlBody
                bodytext={this.state.bodytext}
                bodytextrow={this.state.bodytextrow}
                bodyheading={this.state.bodyheading}
                bodyimages={this.state.bodyimages}
              />
              <FormGroup row>
                <Label htmlFor="footertext" md={2}>
                  Footertext
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="footertext"
                    name="footertext"
                    value={this.state.footertext}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phonenumber" md={2}>
                  Phone Number
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="phonenumber"
                    name="phonenumber"
                    value={this.state.phonenumber}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <h4>Social Media</h4>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="facebookchecked"
                        checked={this.state.facebookchecked}
                        onChange={this.handleInputChange}
                      />
                      <strong>Facebook</strong>
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              {facebookcontent}
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="twitterchecked"
                        checked={this.state.twitterchecked}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>Twitter</strong>
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              {twittercontent}
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="instagramchecked"
                        checked={this.state.instagramchecked}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong>Instagram</strong>
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              {instagramcontent}
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit Webpage
                  </Button>
                </Col>
              </FormGroup>
            </Form>
            <Footer
              footertext={this.state.footertext}
              facebookurl={this.state.facebookurl}
              twitterurl={this.state.twitterurl}
              instagramurl={this.state.instagramurl}
              phonenumber={this.state.phonenumber}
              facebookchecked={this.state.facebookchecked}
              instagramchecked={this.state.instagramchecked}
              twitterchecked={this.state.twitterchecked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UrlCreator);
