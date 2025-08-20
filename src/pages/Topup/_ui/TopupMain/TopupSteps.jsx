
import TopupGroup from "./TopupGroup"

const TopupSteps = ({
    steps,
}) => {

    return(
        <TopupGroup
            extraClass="how"
            title="HOW TO DONATE?"
        >

            <div className="ran-topup__group-list">
                {
                    steps?.map((item, index) => {
                        return <div 
                            key={index}
                            className="ran-topup__group-item"
                        >
                            <p className="fs--16px">{ item }</p>
                        </div>
                    })
                }
            </div>

        </TopupGroup>
    )
}

export default TopupSteps;
