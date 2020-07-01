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
import ImageUploading from "react-images-uploading";
import axios from "axios";
import { API_URL } from "../shared/baseUrl";
import { withRouter } from "react-router-dom";

class Itemstore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemname: "",
      price: "",
      category: "",
      tag: "",
      description: "",
      image: "",
      maxMbFileSize: 5 * 1024 * 1024, // 5Mb
      urlselectedid: "",
      quantity: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
  }

  componentDidMount() {
    this.setState({
      urlselectedid: this.props.urlselectedid,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const index = target.id;
    console.log(this.state);

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    axios
      .post(`${API_URL}/sqlpostitem`, this.state)
      .then((res) => {
        console.log(res.data);
      })
      .then(this.props.history.push("/storeupdater"));

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

        console.log(res.data);
        //handle success
        this.setState({
          image: res.data[0],
        });
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label htmlFor="itemname" md={2}>
              Item Name
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="itemname"
                name="itemname"
                placeholder="Item Name"
                value={this.state.itemname}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <ImageUploading
              onChange={this.onChangeimage}
              maxNumber={1}
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
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="price" md={2}>
              Price
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="price"
                name="price"
                placeholder="Price"
                value={this.state.price}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="category" md={2}>
              Category
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="category"
                name="category"
                placeholder="Category"
                value={this.state.category}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="description" md={2}>
              Description
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="quantity" md={2}>
              Quantity
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="quantity"
                name="quantity"
                placeholder="Quantity"
                value={this.state.quantity}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="tag" md={2}>
              Tag
            </Label>
            <Col md={10}>
              <Input
                type="text"
                id="tag"
                name="tag"
                placeholder="Tag"
                value={this.state.tag}
                onChange={this.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="primary">
                Submit Item
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default withRouter(Itemstore);
