import React, {Component} from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import debounce from 'lodash/debounce';

// contains API keys, added in gitignore
import config from './config';

// components
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


class App extends Component {

    state = {
        searchTerm: '',
        videos: [],
        selectedVideo: null
    };

    videoSearch = debounce(YTSearch, 500);

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({
            searchTerm: event.target.value
        });
        this.videoSearch({key: config.API_KEY, term: event.target.value}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    };

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <SearchBar onInputChange={this.onInputChange} searchTerm={this.state.searchTerm}/>
                </div>
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                               videos={this.state.videos}/>
                </div>
            </div>
        );
    }
}

export default App;
