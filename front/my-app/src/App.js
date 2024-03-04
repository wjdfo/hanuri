import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import * as THREE from "three";
import { DDSLoader } from "three-stdlib";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import "./App.css";
import ButtonComponent from './ButtonComponent';
import Input from './Input';
import Menubar from './Menubar';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = (props) => {
  const obj = useLoader(OBJLoader, props.src);
  const width = window.innerWidth / 3 * 2;
  const height = window.innerHeight * window.innerHeight / window.innerWidth;

  return (
    <Canvas camera = {{position : [600, 400, -100]}} style = {{background : "white", width : width, height : height}}>
      <PerspectiveCamera position = {[1500, 800, -500]} />
      <primitive object = {obj} scale = {0.15}/>
      <OrbitControls />
      <directionalLight color="white" position={[550, 400, -100]} />
      <ambientLight color = "grey" intensity = {0.8}/>
    </Canvas>
  );
};

function App() {
  const [objSrc, setObjSrc] = useState('/Models/HNA070 v1.obj');

  const handleClick = (newObjSrc) => {
    setObjSrc(newObjSrc);
  }

  return (
    <div>

      <body>
        <div className = 'header'>
          <Menubar />
        </div>

        <div className = 'contentPane'>
          
          <div className = "left">
            <div className = 'button'>
              <ButtonComponent objSrc = {objSrc} onButtonClick = {handleClick}/>
            </div>
            <div id = "canvas-container">
              <Suspense fallback = "...loading">
                <Scene src = {objSrc}/>
              </Suspense>
            </div>
          </div>
          
          <div className = "right">
            <Input />
          </div>
        </div>
      </body>

    </div>
  );
};

export default App;