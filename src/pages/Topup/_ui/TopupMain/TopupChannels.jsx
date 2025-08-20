
import AppImg from "components/AppImg"
import { ButtonMessenger } from "components/Button"

import TopupGroup from "./TopupGroup"

import iconGcash from "assets/payment/gcash.png"

const TopupChannels = ({
    list,
}) => {

    return(
        <TopupGroup
            extraClass="channels"
            title="GCASH INFORMATION"
        >

            <div className="frame__desc">
                <p>Minimum top-up amount is <strong>100 PHP</strong>.</p>
            </div>

            <div className="ran-topup__group-list">
                {
                    list?.map((item, index) => {
                        return <div 
                            key={index}
                            className="ran-topup__group-item"
                        >
                            <AppImg src={iconGcash} extraClass="ran-topup__group-item__tag" />
                            <h4 className="fs--25px">{ item?.phone }</h4>
                            <p className="fs--16px">{ item?.name }</p>
                        </div>
                    })
                }
            </div>

            <div className="frame__desc">
                <p><span className="italic">After sending your donation, you can directly inform us via messenger</span></p>
            </div>


            <ButtonMessenger />

        </TopupGroup>
    )
}

export default TopupChannels;
