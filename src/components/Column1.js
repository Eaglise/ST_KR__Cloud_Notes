import {Button} from "react-bootstrap";


function Column1() {
    return(
        <div className={'column1'} >
                    <Button className={'exitButton'}>Выйти</Button>

                    <div className={'hello-user'}>Здраствуйте, User_Nickname_!</div>
                    <div className={'hello-user'}>У Вас Х заметок.</div>
                    <div className={'about-project'}>
                        CelestialNotes - сервис облачного хранения Ваших заметок.
                        <div style={{marginTop:'5px'}}>Наши контакты:
                            https://github.com/ Eaglise/ST_KR__Cloud_Notes
                        </div>
                    </div>
                </div>


    )
}

export default Column1;
