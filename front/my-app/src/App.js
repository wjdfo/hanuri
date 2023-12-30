import React from 'react';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';
import { ImageProvider } from './ImageContext';

const App = () => {
  return (
    <div style = {{display : 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
      <ImageProvider>
        <div>
          <ImageComponent />
          <ButtonComponent />
        </div>
      </ImageProvider>
      <div className = "Requirement" style = {{display : 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <h4>작업 반경(mm)</h4><input type='text'></input>
        <h4>작업 높이(mm)</h4><input type='text'></input>
        <h4>공작물 무게(kg)</h4><input type='text'></input>
        <h4>공작물 재질</h4><input type='text'></input>
        <h4>공작물 개수</h4><input type='text'></input>
        <h4>기타 요청 사항</h4><input type='text'></input>
        <br/>
        <input type = 'submit'></input><label for = '제출'/>
      </div>
    </div>
  );
};

export default App;
