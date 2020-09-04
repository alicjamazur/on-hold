import React from "react";
import { useAppContext } from "../libs/contextLib";
import "./Home.css";
import { Link } from "react-router-dom";
import {Grid, Row, Col, Button, Thumbnail} from 'react-bootstrap'


export default function Home() {
  const { isAuthenticated } = useAppContext();

  function renderLander() {
    return (
      <div className="lander">
        <h1>Machine Learning Projects</h1>
        <p>Simple machine learning algorithms applications</p>
        <div>
          <Link to="/login" className="btn btn-primary btn-lg">
            Login
          </Link>
          &nbsp;
          <Link to="/signup" className="btn btn-default btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  }

  function renderProjects() {
    return (
      <div className="Main-grid">
        <Grid>
      <Row>
        <Col xs={3} md={3}>
          <Thumbnail src="https://github.com/molly-moon/projects/raw/master/images/fernando.png">
            <h3>Object detection</h3>
            <p className="description">npmDetect objects on images with Yolo Neural Network model.</p>
            <Button className="button" bsStyle="primary" size="sm" href="/object-detection-yolo" >
              Get started
            </Button>
            &nbsp;
            <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/projects/blob/master/object-detection-yolo/yolo_object_detection.ipynb" >
              Jupyter Notebook
            </Button>
          </Thumbnail>
        </Col>

        <Col xs={3} md={3}>
          <Thumbnail src="https://github.com/molly-moon/projects/raw/master/images/drica-toca.jpeg">
            <h3>Image classification</h3>
            <p className="description">Identify dog breed on input images with VGG Neural Network model.</p>
            <Button className="button" bsStyle="primary" size="sm" href="/image-classification-vgg" >
              Get started
            </Button>
            &nbsp;
            <Button className="button" bsStyle="default" size="sm" href="" >
              Jupyter Notebook
            </Button>
          </Thumbnail>
        </Col>  

        <Col xs={3} md={3}>
          <Thumbnail src="https://github.com/molly-moon/projects/blob/master/images/2.jpg?raw=true">
            <h3>Image classification</h3>
            <p className="description">Classify hand gestures with ResNet Neural Network model.</p>
            <Button className="button" bsStyle="primary" size="sm" href="/image-classification-resnet" >
              Get started
            </Button>
            &nbsp;
            <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/projects/blob/master/image-classification-resnet/image_classification.ipynb" >
              Jupyter Notebook
            </Button>
          </Thumbnail>
        </Col>
      </Row>

      <Row>
        <Col xs={3} md={3}>
          <Thumbnail src="https://github.com/molly-moon/projects/blob/master/images/face-recognition.png?raw=true">
            <h3>Face recognition</h3>
            <p className="description">Identify a person by their face with Inception Neural Network model.</p>
            <Link to="/projects" className="btn btn-primary btn-sm">
              Get started
            </Link>
            &nbsp;
            <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
              Jupyter Notebook
            </Button>
          </Thumbnail>
        </Col>

        <Col xs={3} md={3}>
          <Thumbnail src="https://github.com/molly-moon/projects/blob/master/images/face-verication.png?raw=true">
            <h3>Face verification</h3>
            <p className="description">Verify whether the input face image matches the database record.</p>
              <Link to="/projects" className="btn btn-primary btn-sm">
                Get started
              </Link>
              &nbsp;
              <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
                Jupyter Notebook
              </Button>
          </Thumbnail>
        </Col>

        <Col xs={3} md={3}>
          <Thumbnail src="https://github.com/molly-moon/projects/blob/master/images/trigger-word-detection.png?raw=true">
            <h3>Trigger word detection</h3>
            <p className="description">Detect wake words in audio files with Recurrent Neural Network. </p>
              <Link to="/projects" className="btn btn-primary btn-sm">
                Get started
              </Link>
              &nbsp;
              <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
                Jupyter Notebook
              </Button>
          </Thumbnail>
        </Col>
      </Row>

      <Row>
        <Col xs={3} md={3}>
            <Thumbnail src="https://lh3.googleusercontent.com/dcTq5hzyyG1ZSi2NG0-Nyeu0YcKw89XOFT-3hX8fpSEzLQwvuYjr9tyVBSjPzC6rKQ">
              <h3>Machine Translation</h3>
              <p className="description">Translate English sentences to French .</p>
                <Link to="/projects" className="btn btn-primary btn-sm">
                  Get started
                </Link>
                &nbsp;
                <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
                  Jupyter Notebook
                </Button>
            </Thumbnail>
          </Col>

          <Col xs={3} md={3}>
            <Thumbnail src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS31cA_PQyjkgRYurITpw-EIRtiQedfq6xoxA&usqp=CAU">
              <h3>Image Classification</h3>
              <p className="description">Diagnose skin cancer</p>
                <Link to="/projects" className="btn btn-primary btn-sm">
                  Get started
                </Link>
                &nbsp;
                <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
                  Jupyter Notebook
                </Button>
            </Thumbnail>
          </Col>

          <Col xs={3} md={3}>
            <Thumbnail src="https://github.com/molly-moon/projects/blob/master/images/trigger-word-detection.png?raw=true">
              <h3>Face detection</h3>
              <p className="description">Detect faces on input images with Haar features</p>
                <Link to="/projects" className="btn btn-primary btn-sm">
                  Get started
                </Link>
                &nbsp;
                <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
                  Jupyter Notebook
                </Button>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? renderProjects() : renderLander()}
    </div>
  );
}
