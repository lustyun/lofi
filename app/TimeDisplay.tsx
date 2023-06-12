"use client";
import React, { useState, useEffect } from "react";

const TimeDisplay = () => {
	const [currentTime, setCurrentTime] = useState("");

	useEffect(() => {
		setCurrentTime(new Date().toLocaleTimeString());

		const interval = setInterval(() => {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="play-pause-button time">
			<div>{currentTime}</div>
		</div>
	);
};

export default TimeDisplay;
