import React, { useEffect } from "react";

const TypingTwoLine = ({ firstTitle, secondTitle, onTypingEnd }) => {
	useEffect(() => {
		let firstTyping = document.querySelector('#firstTitle');

		if (secondTitle) {
			let secondTyping = document.querySelector('#secondTitle');
			secondTyping.style.display = 'none';
			firstTyping.addEventListener('th.endType', function(e) {
				setTimeout(() => {
					secondTyping.style.display = 'block';
					window.TypeHangul.type('#secondTitle', {intervalType: 76});
				}, 500);
				if (onTypingEnd) {
					secondTyping.addEventListener('th.endType', function(e) {
						onTypingEnd();
					})
				}
			});
		}
		if (window.TypeHangul) {
			window.TypeHangul.type("#firstTitle", {intervalType: 80});
			if (!secondTitle && onTypingEnd) {
				firstTyping.addEventListener('th.endType', function(e) {
					onTypingEnd();
				})
			}
		} else {
			console.error("TypeHangul이 로드되지 않았습니다.");
		} // eslint-disable-next-line
  }, []);

  return (
    <div className="titleComponent">
      <h1 className="titleComponent--1" id="firstTitle">{firstTitle}</h1>
      <h1 className="titleComponent--2" id="secondTitle">{secondTitle}</h1>
    </div>
  );
};

export default TypingTwoLine;

/*
index.html에 type-hangul CDN 추가하기
*/
