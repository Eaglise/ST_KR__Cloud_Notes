import {Link, redirect} from "react-router-dom";
import {Button, Form} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
function UnauthorizedPage() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/login');
    }
    return(
        <div>

            <div className={'parent'} >
                <div className={'block1'}>
                    <div className={'welcomeText'} >Добро пожаловать на сервис облачных заметок!</div>
                    <Button className={'enterButton'} onClick={handleClick}>Вход</Button>


                </div>

            </div>

        </div>
    )

}

export default UnauthorizedPage;

