import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ObjectDetectionYolo from "./containers/ObjectDetectionYolo";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import HandGestures from "./containers/HandGestures";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>

      <Route exact path="/object-detection-yolo">
        <ObjectDetectionYolo />
      </Route>

      <Route exact path="/image-classification-resnet">
        <HandGestures />
      </Route>

      <Route>
        <Home />
      </Route>

    </Switch>
  );
}