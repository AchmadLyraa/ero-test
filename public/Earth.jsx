import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
	const earthRef = useRef(); // Reference to the Earth mesh
	const { nodes, materials } = useGLTF("/earth.gltf");

	useFrame(() => {
		if (earthRef.current) {
			earthRef.current.rotation.y += 0.001; // Adjust rotation speed here
		}
	});
	return (
		<group {...props} ref={earthRef} dispose={null}>
			<mesh
				geometry={nodes.Object_4.geometry}
				material={materials["Scene_-_Root"]}
				scale={2.8}
			/>
		</group>
	);
}

useGLTF.preload("/earth.gltf");
