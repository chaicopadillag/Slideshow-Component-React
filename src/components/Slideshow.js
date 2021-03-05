import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as IconLeft } from './../assets/control-left.svg';
import { ReactComponent as IconRight } from './../assets/control-right.svg';

const Slideshow = ({ children, controles = true, autoPlay = true, velocidadTransicion = 500, tiempoPlay = 5000 }) => {
	const slideshow = useRef(null);
	const nextInterval = useRef(null);

	const handleNext = useCallback(() => {
		if (slideshow.current.children.length > 0) {
			const primerSlide = slideshow.current.children[0];
			slideshow.current.style.transition = `${velocidadTransicion}ms ease-out all`;

			const tamanioSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamanioSlide}px)`;

			const transicion = () => {
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(primerSlide);
				slideshow.current.removeEventListener('transitionend', transicion);
			};
			slideshow.current.addEventListener('transitionend', transicion);
		}
	}, [velocidadTransicion]);

	const handlePrev = () => {
		if (slideshow.current.children.length > 0) {
			const ultimoSlide = slideshow.current.children[slideshow.current.children.length - 1];
			slideshow.current.insertBefore(ultimoSlide, slideshow.current.firstChild);

			const tamanioSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transition = `none`;
			slideshow.current.style.transform = `translateX(-${tamanioSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidadTransicion}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};
	useEffect(() => {
		if (autoPlay) {
			nextInterval.current = setInterval(() => {
				handleNext();
			}, tiempoPlay);
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(nextInterval.current);
			});
			slideshow.current.addEventListener('mouseleave', () => {
				nextInterval.current = setInterval(() => {
					handleNext();
				}, tiempoPlay);
			});
		}
	}, [tiempoPlay, autoPlay, handleNext]);
	return (
		<ContenorPrincipal>
			<ContenorSlideshow ref={slideshow}>{children}</ContenorSlideshow>
			{controles && (
				<Controles>
					<Boton onClick={handlePrev}>
						<IconLeft />
					</Boton>
					<Boton derecho onClick={handleNext}>
						<IconRight />
					</Boton>
				</Controles>
			)}
		</ContenorPrincipal>
	);
};

const ContenorPrincipal = styled.div`
	position: relative;
`;
const ContenorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;
const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;
const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: all 0.3s ease;
	/* &:hover{
		background: rgba(0,0,0,.2);
	} */

	path {
		filter: ${(props) => (props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)')};
	}

	${(props) => (props.derecho ? 'right:0' : 'left:0')};
`;

Slideshow.propTypes = {
	controles: PropTypes.bool,
	autoPlay: PropTypes.bool,
	velocidadTransicion: PropTypes.number,
	tiempoPlay: PropTypes.number,
};

export default Slideshow;
