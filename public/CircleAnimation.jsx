import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase"; // Import CustomEase

// Registrasi plugin
gsap.registerPlugin(CustomEase);

const CircleAnimation = () => {
	const circleRef = useRef(null);

	useEffect(() => {
		// Animasi lingkaran menggunakan GSAP
		gsap.to(circleRef.current, {
			duration: 7,
			transformOrigin: "center",
			repeat: -1, // Infinite loop
			ease: CustomEase.create(
				"custom",
				"M0,0 C0,0 0.078,0.01 0.104,0.035 0.133,0.063 0.114,0.137 0.143,0.166 0.169,0.192 0.225,0.178 0.251,0.203 0.28,0.232 0.257,0.304 0.286,0.333 0.312,0.358 0.368,0.346 0.394,0.372 0.423,0.401 0.4,0.471 0.43,0.5 0.455,0.525 0.51,0.513 0.536,0.539 0.565,0.567 0.542,0.637 0.571,0.666 0.597,0.692 0.656,0.678 0.682,0.703 0.711,0.732 0.685,0.804 0.715,0.833 0.74,0.858 0.798,0.846 0.824,0.872 0.853,0.901 0.83,0.966 0.867,0.988 0.894,1.004 1,1 1,1 "
			),
			rotation: 360,
		});
	}, []);

	return (
		<div className="circle-container">
			<svg width="300" height="300" viewBox="0 0 200 200">
				<circle
					ref={circleRef}
					cx="65"
					cy="65"
					r="52"
					stroke="#00ff00"
					strokeWidth="10"
					fill="none"
					strokeDasharray="325"
					strokeDashoffset="0"
				/>
			</svg>
		</div>
	);
};

export default CircleAnimation;
