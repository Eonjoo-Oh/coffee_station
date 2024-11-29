import React from "react";
import '../styles/titleComponent.css'

const TitleComponent = ({title1, title2}) => {
	return (
		<div className="titleComponent">
			<h1 className="titleComponent--1">{title1}</h1>
			<h1 className="titleComponent--2">{title2}</h1>
		</div>
	)
}

export default TitleComponent;