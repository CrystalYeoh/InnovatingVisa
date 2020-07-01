import React,{Component} from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';




class Login extends Component{
    constructor(props){
        super(props);
    }

    
    // onVisaCheckoutReady() {
        

    // window.V.init( {
    //         apikey: "H2F1875VVBF25Q6D97E2217IQtcmIXPnlA5Xi-2jKBSLQbUzE",
    //         // encryptionKey: "Z8SZ5DJE12EH7VS966HG13Am9GNwjEvKgRNwY11qu0Nf2ZtaA",
    //         paymentRequest: { currencyCode: "USD",  subtotal: "10.00"}});
    // window.V.on("payment.success", function(payment) {document.write("payment.success: \n" + JSON.stringify(payment)); });
    // window.V.on("payment.cancel", function(payment) { document.write("payment.cancel: \n" + JSON.stringify(payment)); });
    // window.V.on("payment.error", function(payment, error) { document.write("payment.error: \n" +  JSON.stringify(payment) + "\n" + JSON.stringify(error));});
    // };
    
    render(){
        return (
            <CardImg width="100%" className="v-button" src={"https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"}  width = '150'  height = '80' alt={"Visa Checkout"} />
        );
        }
}

export default Login;