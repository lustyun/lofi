"use client";
import React, { useState } from "react";

const Background = () => {
	const [activeVideoIndex, setActiveVideoIndex] = useState(0);
	const [videoSources, setVideoSources] = useState([
		"outside.mp4",
		"inside_sun.mp4",
		"outside_sun.mp4",
		"outside-rain.mp4",
		"inside.mp4"
	]);

	const handleToggleVideo = () => {
		const nextIndex = (activeVideoIndex + 1) % videoSources.length;
		setActiveVideoIndex(nextIndex);
	  };

	return (
		<div>
			{videoSources.map((videoSource, index) => (
				<video
					key={index}
					className={`background-video ${
						index === activeVideoIndex ? "active" : ""
					}`}
					src={videoSource}
					autoPlay
					loop
					preload="auto"
					muted
					playsInline
				/>
			))}

			<button className="play-pause-button" onClick={handleToggleVideo}>
				Scenes
			</button>
		</div>
	);
};

export default Background;
