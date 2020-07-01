import React,{Component} from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';




class Login extends Component{
    constructor(props){
        super(props);
        this.onVisaCheckoutReady = this.onVisaCheckoutReady.bind(this);
    }


    onVisaCheckoutReady(event) {
    window.V.init( {
    apikey: "C4GI1FOHEIH601ILQACF215ZGx7iAeDkbd_BgOfm7C-jdRv_8",
    externalProfileId: "SYSTEMDEFAULT",
    paymentRequest: {
    currencyCode: "USD",
    subtotal: "20.00"
    }
    });
    window.V.on("payment.success", function(payment) {
    console.log("sucess 2"+JSON.stringify(payment));
    window.DATA=1;
    return payment;
    //document.write("payment.success: \n" + JSON.stringify(payment));
    });
    window.V.on("payment.cancel", function(payment) {
    console.log(payment);
    document.write("payment.cancel: \n" + JSON.stringify(payment));
    });
    window.V.on("payment.error", function(payment, error) {
    console.log(payment);
    document.write("payment.error: \n" + JSON.stringify(payment) + "\n" + JSON.stringify(error));
    });
    }

    render(){
        return (
            <CardImg width="100%" className="v-button" onClick = {this.onVisaCheckoutReady} src={"https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"}  width = '150'  height = '80' alt={"Visa Checkout"} />
        );
        }
}

export default Login;
