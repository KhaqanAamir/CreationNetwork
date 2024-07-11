import React, { useState } from 'react';
import test01 from '../Assets/Videos/test01.mp4';

const VideoGallery = () => {
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      videoSrc: test01,
      website: 'https://example.com/video1',
      linkedIn: 'https://linkedin.com/video1',
      facebook: 'https://facebook.com/video1',
      twitter: 'https://twitter.com/video1',
    },
    {
      id: 2,
      title: 'Video 2',
      videoSrc: test01,
      website: 'https://example.com/video2',
      linkedIn: 'https://linkedin.com/video2',
      facebook: 'https://facebook.com/video2',
      twitter: 'https://twitter.com/video2',
    },
    {
      id: 3,
      title: 'Video 3',
      videoSrc: test01,
      website: 'https://example.com/video3',
      linkedIn: 'https://linkedin.com/video3',
      facebook: 'https://facebook.com/video3',
      twitter: 'https://twitter.com/video3',
    },
    // Add more videos as needed
  ];

  const [currentVideo, setCurrentVideo] = useState(null);

  const openVideoModal = (video) => {
    setCurrentVideo(video);
  };

  const closeVideoModal = () => {
    setCurrentVideo(null);
  };

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-gray-500 p-4 rounded-lg cursor-pointer">
              <video src={video.videoSrc} autoPlay loop muted className="w-full h-auto" onClick={() => openVideoModal(video)}></video>
              <p className="text-center mt-2">{video.title}</p>
              <div className="mt-2">
                <a href={video.website} className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">Website</a>
                <a href={video.linkedIn} className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={video.facebook} className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href={video.twitter} className="text-blue-500" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentVideo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-80" onClick={closeVideoModal}></div>
          <div className="relative z-10 bg-black p-4 rounded-lg shadow-lg">
            <video src={currentVideo.videoSrc} controls autoPlay loop className="w-full h-auto"></video>
            <p className="text-center mt-2">{currentVideo.title}</p>
            <div className="mt-2">
              <a href={currentVideo.website} className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">Website</a>
              <a href={currentVideo.linkedIn} className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={currentVideo.facebook} className="text-blue-500 mr-2" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={currentVideo.twitter} className="text-blue-500" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
            <button className="absolute top-1 right-1 text-white bg-red-500 p-2 rounded-full" onClick={closeVideoModal}>
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
