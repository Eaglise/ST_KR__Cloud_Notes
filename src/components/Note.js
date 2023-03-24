import {Button} from "react-bootstrap";


function Note() {
    return(
            <div className={'noteWrapper'}>
                <div>

                    <div className={'noteName'}>
                        <div className={'noteDate'}>13.03.2023 01:28</div>
                        Заметка</div>

                </div>
                <Button className={'deleteButton'}>X</Button>
            </div>
    )
}

export default Note;
