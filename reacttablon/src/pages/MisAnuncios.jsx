import { Skeleton, Stack, Typography } from '@mui/material';

const MisAnuncios = () => {
	return (<>
		<Typography variant="h3">Mis anuncios</Typography>
		<br/>
			<Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap>
				<Skeleton variant="rounded" animation="wave" width={250} height={180} />
				<Skeleton variant="rounded" animation="wave" width={250} height={180} />
				<Skeleton variant="rounded" animation="wave" width={250} height={180} />
				<Skeleton variant="rounded" animation="wave" width={250} height={180} />
				<Skeleton variant="rounded" animation="pulse" width={250} height={180} />
			</Stack>
	</>);
}
export default MisAnuncios;