// ButtonComponent.js
import "./ButtonComponent.css";

const ButtonComponent = ({objSrc, onButtonClick}) => {
    const handleButtonClick = (newSrc) => {
        onButtonClick(newSrc);
    }

    const width = window.innerWidth / 10 * 7;

    return (
        <div style={{ display: 'grid', width : {width}, margin : '20px', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            <button onClick={() => handleButtonClick('/Models/HNA070 v1.obj')}>지상고정형</button>
            <button onClick={() => handleButtonClick('/Models/Model_basic_moving_HNA70 v1.obj')}>지상이동형</button>
            <button onClick={() => handleButtonClick('/Images/3.PNG')}>천장고정형</button>
            <button onClick={() => handleButtonClick('/Images/4.PNG')}>천장이동형</button>
        </div>
    );
};

export default ButtonComponent;
