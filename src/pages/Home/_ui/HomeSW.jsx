
import HomeFeature from "./HomeFeature"

import imgSchool01 from "assets/home/school-ph.jpg"
import imgSchool02 from "assets/home/school-sg.jpg"
import imgSchool03 from "assets/home/school-mp.jpg"
import logoPhx from "assets/logo-phx.png"
import logoSg from "assets/logo-sg.png"
import logoMp from "assets/logo-mp.png"

const SW_COLLECTION = [
    { main: imgSchool01, overlay: logoPhx },
    { main: imgSchool02, overlay: logoSg },
    { main: imgSchool03, overlay: logoMp },
];

const HomeSW = () => {

    return(
        <HomeFeature 
            extraClass="sw"
            title="Join the fray, choose your faction, and rally your friends to claim victory in the School Wars!<br/>Prove your might, defend your school’s honor, and make your mark in the legacy of RAN Online!"
            collection={SW_COLLECTION}
            hasOverlay={true}
        />
    )
}

export default HomeSW;
