
import AppImg from "components/AppImg"
import Button from "components/Button"

import "./_styles.sass"

const ItemBox = ({
    item,
    btnLbl,
    hasLink,
    callbackRedirect,
}) => {

    const handleRedirect = () => {
        if(hasLink) {
            callbackRedirect(item?.link);
        } else {
            callbackRedirect(false);
        }
    }

    return (
        <div className="snuggle-itembox">
            <div className="snuggle-itembox__thumbnail">
                <AppImg src={item?.img} />
            </div>
            <div className="snuggle-itembox__infos">
                <h4 className="snuggle-itembox__title">{ item?.title }</h4>
                <p className="snuggle-itembox__desc" dangerouslySetInnerHTML={{ __html: item?.desc }}></p>
                
                <Button 
                    isDiv={true}
                    onClick={() => handleRedirect()}
                    btnLbl={btnLbl}
                    extraClass="as--link"
                />
            </div>
        </div>
    )
}

export default ItemBox;