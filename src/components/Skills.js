import React, { useState, useEffect, useRef } from 'react';
import AudioFile from '../assets/audio/audio.mp3';
import backgroundImg from '../assets/img/background_skill.jpg';
import backgroundImg1 from '../assets/img/audio-box_img.jpg';

const AudioPlayer = ({ audioUrl, onEnded }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    return () => {
      audioRef.current.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={audioUrl} onEnded={onEnded}></audio>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="play-button" onClick={() => (isPlaying ? handlePause() : handlePlay())}>
        {isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
      </div>
    </div>
  );
};

export const Skills = () => {
  const [playingAudio, setPlayingAudio] = useState(null);

  const handleAudioClick = (audioId) => {
    if (playingAudio === audioId) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(audioId);
    }
  };

  const handleAudioEnded = (audioId) => {
    setPlayingAudio(null);
  };

  const worksData = [
    {
      id: 1,
      title: 'Work 1',
      audioUrl: AudioFile,
      company: 'Company 1',
    },
    {
      id: 2,
      title: 'Work 2',
      audioUrl: AudioFile,
      company: 'Company 2',
    },
    {
      id: 3,
      title: 'Work 3',
      audioUrl: AudioFile,
      company: 'Company 3',
    },
    {
      id: 4,
      title: 'Work 4',
      audioUrl: AudioFile,
      company: 'Company 4',
    },
    // Add more work items with different audio URLs and companies
  ];

  return (
    <div className="portfolio-section">
      <h2 className="section-title">Portfolio</h2>

      <div className="audio-boxes">
        {worksData.map((work) => (
          <div
            key={work.id}
            className={`audio-box ${playingAudio === work.id ? 'playing' : ''}`}
            onClick={() => handleAudioClick(work.id)}
            style={{ backgroundImage: `url(${backgroundImg1})` }}
          >
            <h3>{work.title}</h3>
            <div className="audio-sign">
              <i className="fas fa-volume-up"></i>
            </div>
            <div className="audio-content">
              <AudioPlayer audioUrl={work.audioUrl} onEnded={() => handleAudioEnded(work.id)} />
            </div>
            
            <div className="work-details">
              <span>{work.company}</span>
              <a href={work.audioUrl} download className="download-button">
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
