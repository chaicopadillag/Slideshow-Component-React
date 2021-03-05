import React from 'react';
import styled from 'styled-components';
import Slideshow from './components/Slideshow';
import Slide from './components/Slide';
import './styles/style.css';

import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';

const AppSlideshow = () => {
	const imagenes = [img1, img2, img3, img4];
	return (
		<main>
			<Titulo>Slideshow Reutilizable</Titulo>
			<hr style={{ marginBottom: '50px' }} />

			<SubTitulo>SlideShow con control y sin autoPlay</SubTitulo>
			<Slideshow autoPlay={false}>
				{imagenes.map((img, index) => (
					<Slide key={index + 1} img={img} texto={`lorem ipsum #${index + 1}`} />
				))}
			</Slideshow>

			<SubTitulo>SlideShow Sin control y con autoPlay</SubTitulo>
			<Slideshow controles={false}>
				{imagenes.map((img, index) => (
					<Slide key={index + 1} img={img} texto={`lorem ipsum #${index + 1}`} />
				))}
			</Slideshow>
		</main>
	);
};
const Titulo = styled.h1`
	font-weight: 700;
	margin-bottom: 10px;
	text-transform: uppercase;
`;
const SubTitulo = styled.p`
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 10px;
`;

export default AppSlideshow;
