// ButtonComponent.js
import "./ButtonComponent.css";

const ButtonComponent = ({objSrc, onButtonClick}) => {
    const handleButtonClick = (newSrc) => {
        onButtonClick(newSrc);
    }

    const width = window.innerWidth / 10 * 7;

    return (
        <div style={{ display: 'grid', width : {width}, margin : '20px', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <button onClick={() => handleButtonClick('/Models/HNA070 v1.obj')}>지상고정형</button>
            <button onClick={() => handleButtonClick('/Models/Model_basic_moving_HNA70 v1.obj')}>지상이동형</button>
            <button onClick={() => handleButtonClick('/Models/수정본.obj')}>천장시스템형</button>
        </div>
    );
};

export default ButtonComponent;
