import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import * as THREE from "three";
import { DDSLoader } from "three-stdlib";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import "./App.css";
import ButtonComponent from './ButtonComponent';
import Commentbar from './Commentbar';
import Input from './Input';
import Menubar from './Menubar';

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = (props) => {
  const obj = useLoader(OBJLoader, props.src);

  return (
    <Canvas id = "canvas" camera = {{position : [600, 400, -200]}}>
      {/* <PerspectiveCamera position = {[1500, 800, -500]} /> */}
      <PerspectiveCamera fov = {75} near = {0.1} far = {1000}/>
      <primitive object = {obj} scale = {0.12}/>
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
            <div className = 'button-container'>
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

        <div className = "footer">
          <Commentbar />
        </div>
      </body>

    </div>
  );
};

export default App;