import {Link, redirect, useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import MainTitle from "../components/MainTitle";
import Column1 from "../components/Column1";
import Column2 from "../components/Column2";
import Column3 from "../components/Column3";

function MainPage() {
    return(
        <div className={'background'} >
            <div className={'wrapper'}>
                <Column1/>
                <Column2/>
                <Column3/>
            </div>
        </div>
    )
}

export default MainPage;

