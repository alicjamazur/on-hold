import React, { useRef, useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Projects.css";
import {Jumbotron, Row, Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Thumbnail} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Link} from "react-router-dom";


export default function Projects() {
 
  // Render webpage
  return (
    <div className="Main-grid">
    <Grid>
      <Row>
        <Col xs={3} md={3}>
          <Thumbnail src="https://github.com/molly-moon/projects/raw/master/images/fernando.png">
            <h3>Object detection</h3>
            <p className="description">Detect objects on images with Yolo Neural Network model.</p>
            <Button className="button" bsStyle="primary" size="sm" href="/object-detection-yolo" >
              Get started
            </Button>
            &nbsp;
            <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
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
            <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
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
            <Button className="button" bsStyle="default" size="sm" href="https://github.com/molly-moon/image-classification-resnet/blob/master/image_classification.ipynb" >
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
