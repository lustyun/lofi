"use client";
import { useRef, useState } from "react";

interface AudioPlayerProps {
	sources: string[]; // Annotate 'sources' as an array of strings
}

const AudioPlayer = ({ sources }: AudioPlayerProps) => {
	const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const audioRef = useRef<HTMLAudioElement | null>(null);

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
		setIsPlaying(true);
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
		setIsPlaying(true);
	};

	const capitalizeFirstLetter = (word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	const getCurrentTrackName = () => {
		const trackPath = sources[currentSourceIndex];
		const trackName = trackPath.substring(
			trackPath.lastIndexOf("/") + 1,
			trackPath.lastIndexOf(".")
		);
		const noDash = trackName.replace(/-/g, " ");
		const words = noDash.split(" ");
		const capitalizedWords = words.map((word: string) =>
			capitalizeFirstLetter(word)
		);
		return capitalizedWords.join(" ");
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
			<div className="current-track">
				<p>Current Track:</p>
				<p>{getCurrentTrackName()}</p>
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
