import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ResponsiveAppBar from './ResponsiveAppBar';
import Home from '../pages/Home';
import MisAnuncios from '../pages/MisAnuncios';
import NuevoAnuncio from '../pages/NuevoAnuncio';
import Destacados from '../pages/Destacados';

const Rutas = () => {
	return (
		<BrowserRouter>
			<ResponsiveAppBar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/misanuncios" element={<MisAnuncios />} />
				<Route path="/nuevoanuncio" element={<NuevoAnuncio />} />
				<Route path="/destacados" element={<Destacados />} />
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	);
}
export default Rutas;