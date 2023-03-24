import Paimon from "../images/genshin-paimon-512x512.ico";

function MainTitle() {
    return(
        <div className={'parent'}>
        <div className={'logo-title'} >
                <img src={Paimon} className={'logoImg'} alt={'Paimon'}/>
                <div className={'mainTitle'}>CelestialNotes</div>
            </div>
        </div>
    )

}

export default MainTitle;

