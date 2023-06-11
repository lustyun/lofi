
"use client";
import { useRef, useState } from "react";

const AudioPlayer = ({ sources }) => {
	const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef(null);

	const togglePlay = () => {
		if (audioRef.current !== null) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};
	const playNext = () => {
		setCurrentSourceIndex((prevIndex) => {
			const nextIndex = prevIndex + 1;
			if (nextIndex < sources.length) {
				return nextIndex;
			} else {
				return 0; // Wrap around to the first source if at the end
			}
		});
	};

	const playPrev = () => {
		setCurrentSourceIndex((prevIndex) => {
			const previousIndex = prevIndex - 1;
			if (previousIndex >= 0) {
				return previousIndex;
			} else {
				return sources.length - 1; // Wrap around to the last source if at the beginning
			}
		});
	};

	return (
		<div>
			<div className="audio-player">
				<audio
					className="player"
					ref={audioRef}
					src={sources[currentSourceIndex]}
					controls
					autoPlay>
					Your browser does not support the audio tag.
				</audio>
			</div>
			<button className="play-pause-button" onClick={playPrev}>
				Previous
			</button>
			<button className="play-pause-button" onClick={togglePlay}>
				{isPlaying ? "Pause" : "Play"}
			</button>
			<button className="play-pause-button" onClick={playNext}>
				Next
			</button>
		</div>
	);
};

export default AudioPlayer;
