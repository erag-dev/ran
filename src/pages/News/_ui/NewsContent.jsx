
import AppImg from "components/AppImg"
import { SectionNormal } from "components/Section"
import Tag from "components/Tag"
import Pagination from "components/Pagination"

import bgLightning from "assets/lightning.png"

import { NEWS_LIST } from "../_const"

const NewsContent = () => {

    return(
        <SectionNormal 
            extraClass="ran-news__listholder"
            bg={bgLightning}
        >

            <div className="ran-news__list">
                {
                    NEWS_LIST?.map((item, index) => {
                        return <Item
                            key={index}
                            item={item}
                        />
                    })
                }
            </div>
          
            <Pagination />

        </SectionNormal>
    )
}

export default NewsContent;

const Item = ({
    item,
}) => {
    return (
        <div className="ran-news__item">
            <div className="ran-news__item-thumbnail">
                <AppImg src={item?.img} />
            </div>
            <Tag 
                text="EVENT" 
                bgColor="#FFF04B" 
            />
            <div className="ran-news__item-infos">
                <p className="ran-news__item-date fs--12px">{ item?.date }</p>
                <h4 className="ran-news__item-title fs--16px">{ item?.title }</h4>
                <p className="ran-news__item-desc fs--16px">{ item?.desc }</p>
            </div>
        </div>
    )
}