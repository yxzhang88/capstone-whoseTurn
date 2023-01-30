// import "./App.css";
import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import Calendar from "./Calendar";

function App() {
  return (
    <>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Signup />
          </div>
        </Container>
      </AuthProvider>
      <div>
        <Calendar />
      </div>
    </>
  );
}

export default App;
