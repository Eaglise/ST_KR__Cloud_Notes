import {Button} from "react-bootstrap";
import Note from "./Note";


function Column3() {
    return(
        <div className={'column3'} >
            <Button className={'createButton'}>Добавить</Button>
            {/*<div id={"div1"} style={{height: '500px',position:'relative'}}>*/}
            {/*    <div id={"div2"} style={{maxHeight:'100%',overflow:'auto',border:'1px solid red'}}>*/}
            {/*      <div id={"div3"}style={{height: '1500px', border: '5px solid yellow'}}>hello</div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>

        </div>
    )
}

export default Column3;
