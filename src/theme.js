import {createTheme} from "@mui/material";
import GenshinFont from './images/Genshin-Impact-Font/zh-cn.ttf';
import BackgroundImage from './images/clouds2B.jpg'
const theme=createTheme({
    palette:{
        primary:{
            main:'#251F36',
        },
        secondary:{
            main:'#110A23',
            button:'#80769B',
            semitransparent:'rgba(17,10,35,0.3)',
        },
        text:{
            text1:'#FFFFFF',
            text2:'#A09DA6',
        },
        background:{
            default:'#251F36',
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
            },
        },

    },


})

export default theme;
