
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"
import Pagination from "components/Pagination"

import bgLightning from "assets/lightning.png"

import { RANKINGS } from "../_const"

const RankCards = () => {

    return(
        <SectionNormal 
            extraClass="ran-rank__cardsholder"
            bg={bgLightning}
        >

            
            <div className="ran-rank__cards">
                {
                    RANKINGS?.map((item, index) => {
                        return <RankCard
                            key={index}
                            item={item}
                            num={index + 1}
                        />
                    })
                }
            </div>
          
            <Pagination />

        </SectionNormal>
    )
}

export default RankCards;

const RankCard = ({
    item,
    num,
}) => {
    return (
        <div className="ran-rank__card">
            <div className="ran-rank__card-row">
                <p className="ran-rank__card-num fs--16px">Rank #{num}</p>
            </div>
            <div className="ran-rank__card-row">
                <p className="fs--14px">Name:</p>
                <p className="ran-rank__card-name fs--16px">{ item?.name }</p>
            </div>
            <div className="ran-rank__card-row">
                <p className="fs--14px">Class / School:</p>
                <div className="ran-rank__card-images">
                    <AppImg src={item?.class} extraClass="ran-rank__card-class" /> 
                    <AppImg src={item?.school} extraClass="ran-rank__card-school" />
                </div>
            </div>
            <div className="ran-rank__card-row">
                <p className="fs--14px">Level:</p>
                <p className="fs--16px">{ item?.level }</p>
            </div>
            <div className="ran-rank__card-row">
                <p className="fs--14px">Kills:</p>
                <p className="fs--16px">{ item?.kills }</p>
            </div>
        </div>
    )
}