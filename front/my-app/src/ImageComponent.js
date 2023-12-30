// ImageComponent.js
import React from 'react';
import { useImage } from './ImageContext';

const ImageComponent = () => {
    const { imgSrc } = useImage();

    return (
        <div>
            <img src={imgSrc} alt="이미지" width = {600} hegiht = {600} />
            <h4>{imgSrc}</h4>
        </div>
    );
};

export default ImageComponent;
