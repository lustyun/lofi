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
		"lofi/Die Legende.mp3",
		"lofi/Difficult.mp3",
		"lofi/Gold and Oden.mp3",
		"lofi/I Want to Live.mp3",
		"lofi/Luffys Fierce Attack.mp3",
		"lofi/Mother Sea.mp3",
		"lofi/Mothers Love.mp3",
		"lofi/Overtaken.mp3",
		"lofi/The Very, Very, Very Strongest.mp3",
		"lofi/To the Grand Line.mp3",
		"lofi/We Are!.mp3",
		"lofi/We Did It!.mp3"
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
