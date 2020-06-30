import React,{Component} from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';




class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <CardImg width="100%" className="v-button" src={"https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"}  alt={"Visa Checkout"} />
        );
        }
}

export default Login;