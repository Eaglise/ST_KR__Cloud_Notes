import {Button} from "react-bootstrap";
import MainTitle from "./MainTitle";


function Column2() {

    return(
        <div className={'column2'} >
            <MainTitle/>
            <div className={'col2-inputWrapper'}>
                <div style={{display:'inline-flex'}}>
                    <Button className={'saveButton'} alt={"save"} />
                    <div>
                    <label htmlFor={'titleInput'} className={'input_label'}>Название заметки</label>
                    <input type={'text'} id={'titleInput'} placeholder={'Заметка без названия'} className={'title_input'}/>
                    </div>
                </div>
                <div>
                    <label htmlFor={'titleInput'} className={'input_label'}>Текст заметки</label>
                    <textarea  id={'textInput'} placeholder={'123'} className={'text_input'}/>
                </div>
            </div>
        </div>
    )
}

export default Column2;
