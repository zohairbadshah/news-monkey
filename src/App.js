import "./App.css";
import React, { Component, useState } from "react";
import News from "./components/News";
import Navbar from "./components/myNavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [prog, setProgress] = useState(10);


  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={prog} />
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={5}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={5}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={5}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={5}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={5}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={5}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={5}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
