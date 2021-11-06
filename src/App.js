import * as React from 'react';
import { useEffect } from 'react';
import Home from './Home';
import Landing from './Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, [])

  return (
    <div>
      <Landing />
      <Home />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}