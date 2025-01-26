import { useState, Suspense } from "react";
import "./App.css";
import CircularEconomySVG from "../public/Circular-Animations.svg";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Earth from "../public/Earth";
import Footer from "../public/Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="circular-container">
				<embed src={CircularEconomySVG} />
			</div>
			<div className="section-earth">
				<div className="earth-container">
					<Canvas>
						<ambientLight intensity={1.5} />
						<OrbitControls enableZoom={false} />
						<Suspense fallback={null}>
							<Earth />
						</Suspense>
						<Environment preset="sunset" />
					</Canvas>
				</div>
				<div className="container">
					<h1>Environmental Hero</h1>
					<p>
						Earth is made by pulupulu Lorem ipsum dolor haqi sit amet
						consectetur bagas adipisicing elit raisha. Quisquam molestiae illum
						dolores architecto deserunt placeat quis id veritatis natus maxime?
					</p>
				</div>
			</div>

			<div>
				<Footer />
			</div>
		</>
	);
}

export default App;
