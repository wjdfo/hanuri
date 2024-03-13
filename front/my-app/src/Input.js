import React from 'react';
import "./Input.css";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            range: '없음',
            height: '없음',
            weight: '없음',
            texture: '없음',
            count: '없음',
            type: '지상고정형',
            etc: '없음',
            contact: '없음'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) { //다중입력 제어
        const target = event.target;
        const value = target.type === 'select' ? target.checked : target.value; //checkbox면 선택된 value, text이면 text로 값 변경
        const name = target.name; // component name

        this.setState({
            [name] : value
        });
    }

    handleSubmit = async (event) => {
        try {
            const response = await fetch("http://18.212.77.181:5000/", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state),
            });
        
            if (response.ok) {
                // 성공적으로 처리된 경우의 로직
                console.log('데이터 전송 성공!');
            } else {
                // 실패한 경우의 로직
                console.error('데이터 전송 실패!');
            }
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };


    render() {
        return (
            <form style = {{display : 'grid', gridTemplateColumns: '2fr 3fr', gap : "10px" }} onSubmit={this.handleSubmit} >
                <label>작업 반경(mm)</label>
                <input type='text' name = 'range' onChange = {this.handleInputChange}></input>

                <label>작업 높이(mm)</label>
                <input type='text' name = 'height' onChange = {this.handleInputChange}></input>
                
                <label>공작물 무게(kg)</label>
                <input type='text' name = 'weight' onChange = {this.handleInputChange}></input>
                
                <label>공작물 재질</label>
                <input type='text' name = 'texture' onChange = {this.handleInputChange}></input>

                <label>공작물 개수</label>
                <input type='text' name = 'count' onChange = {this.handleInputChange}></input>

                <label>제품 타입</label>
                <select name = 'type' onChange = {this.handleInputChange}>
                    <option value = "지상고정형" selected>지상고정형</option>
                    <option value = "지상이동형">지상이동형</option>
                    <option value = "천장고정형">천장시스템형</option>
                </select>

                <label>기타 요청사항</label>
                {/* <input type='text' name = 'etc' onChange = {this.handleInputChange}></input> */}
                <textarea name = 'etc' onChange = {this.handleInputChange}></textarea>

                <label>연락처(전화번호, 메일 등)</label>
                <input type='text' name = 'contact' onChange = {this.handleInputChange}></input>

                <div className = "sbm-container">
                    <input id = "sbm" type = 'submit' value = '견적 제출하기'></input>
                </div>
            </form>
        )
    }
}

export default Input;