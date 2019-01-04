import _ from 'lodash';
import React, { Component } from 'react'; // node_modules ..
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAh5OrIJlagQPBDgeWY9JMvLJB85GFkq-s';

//Create a new Component. This component should produce
//some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('bigbang');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			console.log(videos);

			this.setState({
				videos: videos,
				selectedVideo: videos[0],
			}); // key와 변수 이름이 같을때 this.setState({ videos: videos})
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				{/*<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>*/}
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
}

//Take this component's generated HTML and and put it
//on the page (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container-fluid'));