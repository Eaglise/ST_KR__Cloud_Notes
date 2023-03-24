import {Link, redirect, useNavigate} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

function RegisterPage() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/notes');
    }
    return(
        <div>

            <div className={'parent'} >
                <div className={'block3'}>
                    {/*<div className={'welcomeText'} >Регистрация</div>*/}
                     <Form>
                        <div className={'form-group'}>
                            <label htmlFor={'nameInput'} className={'input_label'}>Логин</label>
                            <input type={'text'} id={'nameInput'} placeholder={'Lumine'} className={'input_field'}/>
                        </div>
                         <div className={'form-group'}>
                            <label htmlFor={'passwordInput'} className={'input_label'}>Пароль</label>
                            <input type={'password'} id={'passwordInput'} placeholder={'•••••••'} className={'input_field'}/>
                        </div>
                         <div className={'form-group'}>
                            <label htmlFor={'passwordInput2'} className={'input_label'}>Повторить пароль</label>
                            <input type={'password'} id={'passwordInput2'} placeholder={'•••••••'} className={'input_field'}/>
                        </div>

                    <Button className={'enterButton1'} onClick={handleClick}>Регистрация</Button>



                    </Form>
                </div>

            </div>

        </div>
    )

}

export default RegisterPage;

