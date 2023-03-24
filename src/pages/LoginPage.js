import {Link, redirect, useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

function LoginPage() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/notes');
    }
    return(
        <div>

            <div className={'parent'} >
                <div className={'block2'}>
                    {/*<div className={'welcomeText'} >Авторизация</div>*/}
                     <Form>
                        <div className={'form-group'}>
                            <label htmlFor={'nameInput'} className={'input_label'}>Логин</label>
                            <input type={'text'} id={'nameInput'} placeholder={'Lumine'} className={'input_field'}/>
                        </div>
                         <div className={'form-group'}>
                            <label htmlFor={'passwordInput'} className={'input_label'}>Пароль</label>
                            <input type={'password'} id={'passwordInput'} placeholder={'•••••••'} className={'input_field'}/>
                        </div>

                    <Button className={'enterButton1'} onClick={handleClick}>Войти</Button>
                         <div >
                             <Link to={'/register'} className={'no-account'}>Нет аккаунта :(</Link>
                         </div>


                    </Form>
                </div>

            </div>

        </div>
    )

}

export default LoginPage;

