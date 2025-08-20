
import AppImg from "components/AppImg"
import HomeBoardGroup from "./HomeBoardGroup"

import badgeClub from "assets/home/club-logo.png"

const HomeBoardWars = () => {
    return (
        <HomeBoardGroup
            extraClass="wars"
            title={null}
        >

            <WarBox
                warName="CLUB WARS (TH E-ROOM)"
                warShortcut="cw"
            >
                <div>
                    <AttrDiv 
                        label="Guild"
                        val="CrazyOnes"
                    />

                    <AttrDiv 
                        label="Master"
                        val="-TAGAPASLANG-"
                    />
                    
                    <AttrDiv 
                        label="Tax"
                        val="30%"
                    />
                </div>
                <div>
                    <AttrDiv 
                        label="Badge"
                        val={badgeClub}
                        isImg={true}
                    />

                    <AttrDiv 
                        label="Members"
                        val="50"
                    />
                </div>
            </WarBox>


            <WarBox
                warName="TYRANNY WAR"
                warShortcut="tw"
            >
                <div>
                    <AttrDiv 
                        label="School"
                        val="Mystic Peak"
                    />

                    <AttrDiv 
                        label="Buffs"
                        val="+15% Speed, +10% EXP, +5% Drop Rate"
                    />
                </div>
            </WarBox>

        </HomeBoardGroup>
    )
}

export default HomeBoardWars;

const WarBox = ({
    warName,
    warShortcut,
    children
}) => {
    return (
        <div className={`ran-home__board-war war--${warShortcut}`}>
            <h2 className="fs--20px">{ warName }</h2>
            <div className="ran-home__board-war__attrs">
                { children }
            </div>
        </div>
    )
}

const AttrDiv = ({
    label,
    val,
    isImg,
}) => {
    return (
        <div className={`ran-home__board-war__attr attr--${label?.toLowerCase()}`}>
            <p className="fs--12px">{label}:</p>
            
            {
                isImg
                ? <AppImg src={val} />
                : <p className="fs--12px">{val}</p>
            }
        </div>
    )
}