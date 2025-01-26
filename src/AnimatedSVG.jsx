// import React, { useState, useRef, useEffect } from "react";

// const AnimatedSVG = () => {
// 	const [isVisible, setIsVisible] = useState(false);
// 	const svgRef = useRef(null);

// 	useEffect(() => {
// 		const observer = new IntersectionObserver(
// 			([entry]) => {
// 				if (entry.isIntersecting) {
// 					setIsVisible(true);
// 				}
// 			},
// 			{ threshold: 0.5 } // Animasi akan mulai saat 50% elemen terlihat
// 		);

// 		if (svgRef.current) {
// 			observer.observe(svgRef.current);
// 		}

// 		return () => {
// 			if (svgRef.current) {
// 				observer.unobserve(svgRef.current);
// 			}
// 		};
// 	}, []);

// 	return (
// 		<div
// 			style={{
// 				height: "150vh",
// 				display: "flex",
// 				justifyContent: "center",
// 				alignItems: "center",
// 			}}>
// 			<svg
// 				ref={svgRef}
// 				width="200"
// 				height="200"
// 				viewBox="0 0 200 200"
// 				xmlns="http://www.w3.org/2000/svg">
// 				<circle
// 					cx="100"
// 					cy="100"
// 					r="50"
// 					stroke="blue"
// 					strokeWidth="5"
// 					fill="none"
// 					style={{
// 						strokeDasharray: 314, // Keliling lingkaran (2 * Math.PI * r)
// 						strokeDashoffset: isVisible ? 0 : 314,
// 						transition: "stroke-dashoffset 2s ease-out",
// 					}}
// 				/>
// 			</svg>
// 		</div>
// 	);
// };

// export default AnimatedSVG;

import React, { useState, useRef, useEffect } from "react";

const AnimatedSVG = ({ svgSource }) => {
	const [isVisible, setIsVisible] = useState(false);
	const svgRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.5 }
		);

		if (svgRef.current) {
			observer.observe(svgRef.current);
		}

		return () => {
			if (svgRef.current) {
				observer.unobserve(svgRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={svgRef}
			className={`circular-container ${isVisible ? "animate" : ""}`}
			style={{ textAlign: "center", margin: "50px auto" }}>
			<embed src={svgSource} type="image/svg+xml" />
		</div>
	);
};

export default AnimatedSVG;
