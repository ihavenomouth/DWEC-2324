
import './App.css'

import {Container,Typography, Stack} from '@mui/material';
import Rutas from './comp/Rutas';
import './css/anuncios.css';

function App() {
	return (
		<>
			<Container maxWidth={false} sx={{
				"@keyframes rotarColor" : {
					"0%" : {
						backgroundColor: "primary.main",
					},
					"50%" : {
						backgroundColor: "darkviolet",
					},
					"100%" : {
						backgroundColor: "purple",
					},
				},
				backgroundImage: "url(/imgPortada.png)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
				backgroundSize: "cover",
				marginBottom: "1rem",
				animation: "rotarColor 4s ease 0s alternate infinite none running",
			}}>
				<Stack justifyContent="center" alignItems="center" height="200px">
					<Typography variant="h1" color="HighlightText" textAlign='center'
						sx={{
							fontSize: 'clamp(2rem, 10vw, 6rem)', // Tamaño de fuente adaptable
						}}
					>
						Tablón de anuncios
					</Typography>
				</Stack>
			</Container>

			<Container maxWidth="md">
				<Rutas />				
			</Container>
		</>
	);
}
export default App;