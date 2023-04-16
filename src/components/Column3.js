import Note from "./Note";
import {Button, Container, CssBaseline, Grid} from "@mui/material";
import {useEffect, useState} from "react";




function Column3() {
    const notes=[
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},
        {title:'Название', date:'13.01.2023 10:48', text:'_текст_'},


    ]

    return(

        <Grid element
              xs={3}
        sx={{backgroundColor:'secondary.semitransparent1'}}
        >
            <Grid container columns={1} rowSpacing={0}>

            <Button variant={"contained"}
            sx={{backgroundColor:'button.add.main', color:'button.add.text', border:'1px solid', borderColor:'button.add.text',
                width:'100%', borderRadius:'0px', height:'13vh', fontSize:'20px',
            ":hover":{
                backgroundColor:'button.add.border',
            }
            }}
            >
                    Добавить
            </Button>

        </Grid>
            <CssBaseline />
            <Grid container sx={{overflow: 'auto', maxHeight: "87vh",
                 "&::-webkit-scrollbar": {
                      width: 10
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: 'secondary.semitransparent'
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "secondary.button",
                      borderRadius: 2
                    }

            }}

            >


                {notes.map((item, index) => {
                            return (
                                <Grid element sx={{width:"100%"}}>
                                    <Note {...item}/>
                                </Grid>
                            )
                        })}



            </Grid>


        </Grid>

    )
}

export default Column3;
