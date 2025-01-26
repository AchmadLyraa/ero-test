import React from "react";

function Footer() {
	return (
		<footer
			style={{
				backgroundColor: "#333",
				color: "#fff",
				textAlign: "center",
				padding: "10px 0",
				fontFamily: "Poppins",
			}}>
			<p style={{ margin: 0 }}>
				© {new Date().getFullYear()} PuluPulu. All Rights Reserved.
			</p>
		</footer>
	);
}

export default Footer;
