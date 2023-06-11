import AudioPlayer from "./AudioPlayer";
import TimeDisplay from "./TimeDisplay";


export default function App() {
	const audioSources = ["deepwater.mp3", "salty sailor.mp3"];
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
