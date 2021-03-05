import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Slide = ({ img, texto = null, bgTexto = null, colorTexto = null }) => {
	return (
		<SlideItem>
			<a href={img} target="_blank" rel="noreferrer">
				<img src={img} alt={texto && texto} />
			</a>
			{texto && (
				<TextoSlide bg={bgTexto} colorTexto={colorTexto}>
					<p>{texto}</p>
				</TextoSlide>
			)}
		</SlideItem>
	);
};
const SlideItem = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: all 0.3s ease;
	z-index: 10;
	max-height: 500px;
	position: relative;

	img {
		width: 100%;
		vertical-align: top;
	}
`;
const TextoSlide = styled.div`
	background: ${(props) => (props.bg ? props.bg : 'rgba(0,0,0,.5)')};
	color: ${(props) => (props.colorTexto ? props.colorTexto : '#FFF')};
	width: 100%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 700px) {
		position: relative;
	}
`;

Slide.propTypes = {
	img: PropTypes.string.isRequired,
	texto: PropTypes.string,
	bgTexto: PropTypes.string,
	colorTexto: PropTypes.string,
};

export default Slide;
