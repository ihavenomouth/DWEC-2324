// import './App.css';

// import Encabezado from './componentes/Encabezado';
// import Rutas from './componentes/Rutas';

// const App = () =>{

//   return (<>
//     <Encabezado/>
//     <Rutas/>
//   </>);
// }

// export default App;


import {useState, useRef} from 'react';
import { Stack, Button, Autocomplete, TextField,Typography, Container,Alert } from '@mui/material'

function App() {
	const [nombre, setNombre] = useState("");
	const [color, setColor] = useState("");
	const [mostrarAlerta, setMostrarAlerta] = useState(false);

	const nombreRef = useRef(""); // Ref para el TextField del nombre
	const colorRef = useRef(""); // Ref para el TextField del color

	const accion = () => {
		setNombre(nombreRef.current.value);
		setColor(colorRef.current.value);
		// alert(colorRef.current.value +" , "+ nombreRef.current.value)
		setMostrarAlerta(!mostrarAlerta);
	};

	const options = ['Azul', 'Rojo', 'Verde', 'Naranja'];

	return (
		<>
			<Container maxWidth="md">
				<Stack spacing={4}>
					<Typography variant="h1" gutterBottom>Primer proyecto MUI</Typography>

					<TextField id="nombre" label="Nombre" variant="outlined" 
						inputRef={nombreRef} />

					<Autocomplete
						id="autocompletado-colores"
						options={options}
						renderInput={(params) => <TextField {...params} label="Colores" inputRef={colorRef} />}
					/>
				</Stack>

				<br />
				<Button variant="contained" onClick={accion}>Acción</Button><br />
				<br />
				{mostrarAlerta && (
					<Alert severity="info">
						Nombre: {nombre} - Color: {color}
					</Alert>
				)}
			</Container>
		</>
	);
}
export default App;