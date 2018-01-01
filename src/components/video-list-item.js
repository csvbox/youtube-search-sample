import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    return (
        <li className='list-group-item' onClick={() => onVideoSelect(video)}>
            <div className='media'>
                <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title}
                     className='d-flex align-self-center mr-3'/>
                <div className='media-body'>
                    <div className='media-heading'>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
