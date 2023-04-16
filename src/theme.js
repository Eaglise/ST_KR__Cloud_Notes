import {createTheme, makeStyles} from "@mui/material";
import GenshinFont from './images/Genshin-Impact-Font/zh-cn.ttf';
import BackgroundImage from './images/clouds2B.jpg'
const theme=createTheme({
    palette:{
        primary:{
            main:'#251F36',
            dark:'#181324',

        },
        secondary:{
            main:'#110A23',
            button:'#80769B',
            semitransparent:'rgba(17,10,35,0.3)',
            semitransparent1:'rgba(31,28,41,0.49)',
        },
        text:{
            text1:'#FFFFFF',
            text2:'#A09DA6',
        },
        background:{
            default:'#251F36',
        },
        button:{
            add:{
                main:'#659E6C',
                border:'#4D9855',
                text:'#203D23',
            },
            delete:{
                main:'#78211C',
                border:'#330F0D',
                text:'#330F0D',
            },
            exit:{
                main:'#A76E6B',
                border:'#9E4742',
                text:'#4F2B29',
            },

        }
    },

    typography:{
        fontFamily: [
            '-apple-system',
            'GenshinFont',
            'NunitoSansExtraLightFont',
            'NunitoSansBoldFont',

    ].join(','),
    },

    components:{
        MuiCssBaseline:{
            styleOverrides:[
                `@font-face {
                font-family: GenshinFont;
                src: url(${GenshinFont});
                }`,
                `@font-face {
                  font-family: NunitoSansExtraLightFont;
                  src: url('images/Nunito_Sans/NunitoSans-ExtraLight.ttf');
                }`,
                `@font-face {
                  font-family: NunitoSansBoldFont;
                  src: url('images/Nunito_Sans/NunitoSans-Bold.ttf');
                }`
            ]
        }
    },

    overrides: {

        MuiCssBaseline: {
            '@global': {
                body: {
                    // border: '2px solid blue',
                    backgroundImage: `url("${BackgroundImage}")`,
                },
                "*::-webkit-scrollbar": {
                    width: "5px"
                },
                "*::-webkit-scrollbar-track": {
                    background: "#110A23"
                },
                "*::-webkit-scrollbar-thumb": {
                    background: "#330F0D",
                    borderRadius: "2px"
                }
            },

        },

    },


})

export default theme;


