import React from 'react';
import YouTube from 'react-youtube';
import './VideosSearchBar.css';

import Loader from '../../shared/Loader/Loader';
import videoService from '../../services/video-service';
import FoodJokeOrTrivia from '../../shared/FoodJokeOrTrivia/FoodJokeOrTrivia';

class VideosSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {},
            query: '',
            loading: false
        }
    }

    queryChangeHandler = e => {
        const query = e.target.value;
        this.setState({
            query,
            result: {},
            loading: false
        });
    }

    submitVideoSearch = e => {
        e.preventDefault();
        this.setState({ query: this.state.query, loading: true }, () => {
            setTimeout(() => {
                videoService.getVideos(this.state.query)
                    .then(res => {
                        res.videos.length === 0 ? 
                        this.setState({ result: {}, message: 'No videos found', loading: false }) 
                        : this.setState({ result: res, loading: false });
                    });
            }, 1000);
        });
    }

    renderSearchResult = () => {
        let { result } = this.state;
        if (Object.keys(result).length !== 0) {
            return (result.videos.map(video => 
                <div className="video">
                    <h4>{video.title}</h4>
                    <YouTube videoId={video.youTubeId} opts={{height: '250',width: '500'}}/>
                </div>));
        }
    }

    render() {
        return (
            <div>
                <h4>Search food videos!</h4>
                <p>Did you know that: {<FoodJokeOrTrivia opt={"trivia"} />}</p>
                <form className="search" onSubmit={this.submitVideoSearch}>
                    <input type="text" className="searchTerm" placeholder="What are you looking for?, eg. pumpkin, pasta" onChange={this.queryChangeHandler}/>
                    {this.state.query === '' ? <h4>Please enter query</h4> : 
                        <button type="submit" className="searchButton">
                            Find videos
                        </button>}
                </form>
                {this.state.message ? <h2>{this.state.message}</h2> : null}
                {this.state.loading ? <Loader /> : 
                    <div className="renderVideos"> 
                        {this.renderSearchResult()}
                    </div>}
            </div>
        )
    }
}

export default VideosSearchBar;