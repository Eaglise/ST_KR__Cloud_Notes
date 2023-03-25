import Paimon from "../images/genshin-paimon-512x512.ico";
import {Container, Typography, SvgIcon, Icon} from "@mui/material";

function MainTitle() {
    return(
        <Container maxWidth={'sm'}>

            <Typography variant={'h3'} align={'center'} sx={{fontFamily:"GenshinFont", color:"text.text1", outline:"black",
            stroke:'2.1px black',   }} gutterBottom>
            <Icon sx={{height:"50px", width:"50px"}}>
            <img src={Paimon} alt={'Paimon'} className={'logoImg'} />
            </Icon>
                CelestialNotes
            </Typography>
        </Container>
    )

}

export default MainTitle;

