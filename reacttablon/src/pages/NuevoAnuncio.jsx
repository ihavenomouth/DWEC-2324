import { Typography, TextField, Autocomplete, Button, Stack } from '@mui/material';
const NuevoAnuncio = () => {
	
	const options = ['General', 'Objeto perdido', 'Importante', 'Mantenimiento'];

	return (<>
		<Typography variant="h3">Nuevo anuncio</Typography><br/>
		<Stack mb={2} spacing={2} sx={{maxWidth: "600px"}}>
		<TextField id="nombre" label="Nombre" variant="outlined"/>

		<Autocomplete
			id="autocompletado-cat"
			options={options}
			renderInput={(params) => <TextField {...params} label="Categoría" />}
			// onChange={(ev, valor) => setColor(valor)}
		/>
		</Stack>

		<Button variant="contained" >Crear anuncio</Button>

	</>);
}
export default NuevoAnuncio;