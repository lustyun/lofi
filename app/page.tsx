import AudioPlayer from "./AudioPlayer";
import TimeDisplay from "./TimeDisplay";

export default function App() {
	const audioSources = [
		"Cozy-Place-Chill-Background-Music.mp3",
		"Ghostrifter-Official-City-Lights.mp3",
		"Ghostrifter-Official-Lost-In-Thought.mp3",
		"Heart-Of-The-Ocean.mp3",
		"Late-at-Night.mp3",
		"Morning-Routine-Lofi-Study-Music.mp3",
		"purrple-cat-green-tea.mp3",
		"roa-music-walk-around-lofi-version.mp3",
		"Serendipity.mp3",
		"Still-Awake-Lofi-Study-Music.mp3",
		"storm-clouds-purpple-cat.mp3",
		"Winter-Night.mp3",
	];
	return (
		<div className="container">
			<video className="background-video" autoPlay loop muted playsInline>
				<source src="/outside.mp4" type="video/mp4" />
			</video>
			<div className="audio-controls">
				<AudioPlayer sources={audioSources} />
			</div>
			<div className="time">
				<TimeDisplay />
			</div>
		</div>
	);
}
