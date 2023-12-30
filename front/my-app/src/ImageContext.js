// ImageContext.js
import { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
    // const [imgSrc, setImgSrc] = useState('./Model_basic_HNA70.obj'); // 초기 값 설정
    const [imgSrc, setImgSrc] = useState('/1.PNG'); // 초기 값 설정

    const changeImage = (newSrc) => { //newSrc를 인자로 받아와서
        setImgSrc(newSrc); //imgSrc에 newSrc 저장
    };

    return (
        <ImageContext.Provider value={{ imgSrc, changeImage }}>
            {children}
        </ImageContext.Provider>
    );
};

const useImage = () => {
    return useContext(ImageContext);
};

export { ImageProvider, useImage };
