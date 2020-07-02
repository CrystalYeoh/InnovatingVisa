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

class Urlmainimage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxMbFileSize: 5 * 1024 * 1024, // 5Mb
      image: "",
    };

    this.onChangeimage = this.onChangeimage.bind(this);
  }

  onChangeimage(imageList) {
    // data for submit
    console.log(this.state);
    const formData = new FormData();
    imageList.forEach((file, i) => {
      formData.append(i, file.file);
    });

    axios
      .post(`${API_URL}/upload-image`, formData)

      .then((res) => {
        //handle success
        console.log(res.data);
        this.props.callbackFromParent(res.data[0]);
        this.setState({
          image: res.data[0],
        });
        this.props.callbackFromParent(res.data[0]);
        console.log(this.state);
      })
      .catch(function (response) {
        //handle error
      });
  }
  render() {
    return (
      <div>
        Front image Upload
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
      </div>
    );
  }
}

export default withRouter(Urlmainimage);
