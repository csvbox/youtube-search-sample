import React from 'react';

const VideoDetail = ({video}) => {

    if (!video) {
        return <div>Loading video...</div>;
    }

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className='col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url} frameBorder='0' title='video detail'/>
            </div>
            <div className='details'>
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;
