import React, { useEffect, useState } from 'react';
import test01 from '../Assets/Videos/test01.mp4';

const VideoSlider = () => {
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      videoSrc: test01,
    },
    {
      id: 2,
      title: 'Video 2',
      videoSrc: test01,
    },
    {
      id: 3,
      title: 'Video 3',
      videoSrc: test01,
    },
    // Add more videos as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
    }, 3000); // Adjust the delay (in milliseconds) for automatic sliding

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out transform translate-x">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`w-64 h-36 bg-gray-500 m-2 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-50'
                } cursor-pointer`}
                onClick={() => openModal(index)}
              >
                <video
                  src={video.videoSrc}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                ></video>
                <p className="text-white text-center p-2 bg-black opacity-75">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-80" onClick={closeModal}></div>
          <div className="relative z-10 bg-black p-4 rounded-lg shadow-lg">
            <video
              src={videos[currentSlide].videoSrc}
              controls
              autoPlay
              loop
              className="w-full h-auto"
            ></video>
            <p className="text-center mt-2">{videos[currentSlide].title}</p>
            <button
              className="absolute top-1 right-1 text-white bg-red-500 p-2 rounded-full"
              onClick={closeModal}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSlider;
