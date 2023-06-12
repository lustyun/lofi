"use client";
import React, { useState } from "react";

const Background = () => {
	const [videoSource, setVideoSource] = useState("outside-rain.mp4");
	const [key, setKey] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);

	const switchVideo = () => {
		setVideoSource(
			videoSource === "outside.mp4" ? "outside-rain.mp4" : "outside.mp4"
		);
		setKey(key + 1);
	};
	const handleVideoCanPlayThrough = () => {
		setIsLoaded(true);
	};

	return (
		<div className={`video-container ${isLoaded ? "loaded" : ""}`}>
			<button className="play-pause-button" onClick={switchVideo}>
				Weather
			</button>
			<video
				className="background-video"
				autoPlay
				loop
				preload="auto"
				muted
				playsInline
				key={key}
				onCanPlayThrough={handleVideoCanPlayThrough}>
				<source src={videoSource} type="video/mp4" />
			</video>
		</div>
	);
};

export default Background;
