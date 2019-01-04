import React, { Component } from 'react';
// 상단에 입력창
// 타이핑 가능
// 비디오 리스트 업데이트
// 유투브 API 요청
/*
const SearchBar = () => {
	return <input />; //React.createElement
};

*/

class SearchBar extends Component {
	constructor(props) {
		super(props); // 부모 메소드 호출
		console.log(props);
		this.state = {term: ''}; // state정의
		// term: 사용자가 검색 인풋에 업데이트 할 때마다 term이 업데이트 되거나 변경사항을 받아옴
	}

	render() {
		//return <input onChange={this.onInputChange}/>;
		// return <input onChange={ event => console.log(event.target.value)} />;
		// this.state.term = event.target.value // BAD!
		console.log('search bar render: ' + this.state.term);

		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={this.onTest}/>
					{/*onChange={ event => this.onInputChange(event.target.value)} />*/}
				 {/*<div>Value of the input: {this.state.term}</div>*/}
			</div>
		);
	}

	onTest = (e) => {
		console.log(e.target.value);
		const term = e.target.value;
		this.setState({
			term: term
		});
		this.props.onSearchTermChange(term);
	};

	onInputChange(term) {
		//onSearchTermChange
		this.setState(term); /* { term: term }*/
		this.props.onSearchTermChange(term);
	}

	/*
	onInputChange(event) { // 함수명 handleInputChange 라고도 만이씀 (이벤트 핸들러)
		console.log('change', event.target.value);
		console.log(event);
	}
	*/
}

export default SearchBar;