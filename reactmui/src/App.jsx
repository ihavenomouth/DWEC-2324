import { Container, Typography, Stack, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {


	return (<>
  <Typography variant="h2" gutterBottom textAlign="center">Aprendiendo MUI</Typography>

  <Container maxWidth="sm" sx={{ background: "#ff0", padding:5 }}>
    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam mollitia esse! Minima cupiditate dicta pariatur nam recusandae odio corrupti eius suscipit placeat maxime! Debitis voluptatem porro nisi distinctio cupiditate.</Typography>
  </Container>
  
  <Container maxWidth="sm" sx={{mt:4}}>
    <Typography>¿Desea eliminar el usuario y todos los datos asociados con él?</Typography>
    <Stack component="form" m="0.5rem" direction="row" spacing={2}>
      <Button variant="outlined">Cancelar</Button>
      <Button variant="contained" color="error" startIcon={<DeleteIcon />}>Eliminar</Button>
    </Stack>
  </Container>

	</>);
}

export default App;
