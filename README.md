# SLIDESHOW REUTILIZABLE

Este componente de Slideshow requiere **styled-components**, importante copiar los iconos de los controles a tu carpeta de assets

## Propiedades de SlideShow

Por defecto:

```
{controles = true, autoPlay = true, velocidadTransicion = 500, tiempoPlay = 5000 }
```

```
Slideshow.propTypes = {
	controles: PropTypes.bool,
	autoPlay: PropTypes.bool,
	velocidadTransicion: PropTypes.number,
	tiempoPlay: PropTypes.number,
};
```

---

## Propiedades de Slide

Por defecto:

```
{ img, texto = null, bgTexto = null, colorTexto = null }
```

```
Slide.propTypes = {
	img: PropTypes.string.isRequired,
	texto: PropTypes.string,
	bgTexto: PropTypes.string,
	colorTexto: PropTypes.string,
};
```

---

## ¿Como usar?

Clona o descarga el proyecto y copia los los dos archivos de la carpeta **_components_** a tu proyecto e importa en tu componente, mira un ejemplo.

```
import Slideshow from './components/Slideshow';
import Slide from './components/Slide';

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

```

---

![Slideshow Component](https://raw.githubusercontent.com/chaicopadillag/Slideshow-Component-Rect/master/Screenshot.png)
