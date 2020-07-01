import React, { useState, useEffect } from "react";
import { renderButton, checkSignedIn } from "../GoogleAuth/authUtils";
import Dashboard from "../Dashboard/dashboard";
import styled from "styled-components";

function DashboardGa() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignin = (signedIn) => {
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    }
  };

  const init = () => {
    console.log("here");
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignin);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log("there");
    console.log(window.gapi);
    window.gapi.load("auth2", init);
  });

  return (
    <div className="App">
      {!isSignedIn ? (
        <>
          <Title>Google Analytics Dashboard</Title>
          <ButtonContainer>
            <div id="signin-button"></div>
          </ButtonContainer>
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default DashboardGa;

const ButtonContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  padding-top: 10vmin;
  margin-top: 0;
`;
