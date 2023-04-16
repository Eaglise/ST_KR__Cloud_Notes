import Paimon from "../images/paimon.png";
import {Container, Typography, SvgIcon, Icon, Box, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

function MainTitle() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/notes');
    }
    return(
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={3} align="center">
        <Box

            maxWidth={'sm'}
            onClick={handleClick}
            sx={{display:'inline-flex', flexDirection: 'row',}}
        >
            <Icon sx={{height:"50px", width:"50px"}}>
                <img src={Paimon} alt={'Paimon'} className={'logoImg'} />
            </Icon>
            <Typography variant={'h3'} align={'center'} sx={{fontFamily:"GenshinFont", color:"text.text1", outline:"black",
            stroke:'2.1px black',   }} gutterBottom>

                CelestialNotes
            </Typography>
        </Box>
                </Grid>
        </Grid>
    )

}

export default MainTitle;

