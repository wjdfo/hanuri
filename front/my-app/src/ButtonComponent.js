// ButtonComponent.js
import React from 'react';
import { useImage } from './ImageContext';

const ButtonComponent = () => {
    const { changeImage } = useImage();

    const handleButtonClick = (newSrc) => {
        changeImage(newSrc);
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {/* <button onClick={() => handleButtonClick('./Model_basic_HNA70.obj')}>지상고정형</button> */}
            <button onClick={() => handleButtonClick('/Images/1.PNG')}>지상고정형</button>
            <button onClick={() => handleButtonClick('/Images/2.PNG')}>지상이동형</button>
            <button onClick={() => handleButtonClick('/Images/3.PNG')}>천장고정형</button>
            <button onClick={() => handleButtonClick('/Images/4.PNG')}>천장이동형</button>
        </div>
    );
};

export default ButtonComponent;
