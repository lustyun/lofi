import AudioPlayer from "./AudioPlayer";
import TimeDisplay from "./TimeDisplay";
import Background from "./Background";

export default function App() {
	const audioSources = [
		"lofi/Cozy-Place-Chill-Background-Music.mp3",
		"lofi/Ghostrifter-Official-City-Lights.mp3",
		"lofi/Ghostrifter-Official-Lost-In-Thought.mp3",
		"lofi/Heart-Of-The-Ocean.mp3",
		"lofi/Late-at-Night.mp3",
		"lofi/Morning-Routine-Lofi-Study-Music.mp3",
		"lofi/purrple-cat-green-tea.mp3",
		"lofi/roa-music-walk-around-lofi-version.mp3",
		"lofi/Serendipity.mp3",
		"lofi/Still-Awake-Lofi-Study-Music.mp3",
		"lofi/storm-clouds-purpple-cat.mp3",
		"lofi/Winter-Night.mp3",
	];

	return (
		<div className="container">
			<Background />
			<div className="audio-controls">
				<AudioPlayer sources={audioSources} />
			</div>
			<div className="time">
				<TimeDisplay />
			</div>
		</div>
	);
}
