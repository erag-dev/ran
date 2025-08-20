

import Tag from "components/Tag"

import HomeBoardGroup from "./HomeBoardGroup"

const ARR = [
    { title: 'CPU', desc: 'Dual core and above' },
    { title: 'OS', desc: 'Window 7 (64bit) and above' },
    { title: 'Memory', desc: '4GB and above' },
    { title: 'Direct X', desc: 'DirectX9.0a or higher' },
    { title: 'GPU', desc: 'Nvidia GTX 250' },
    { title: 'Hard Disk', desc: '5 GB or more' },
];

const HomeBoardReq = () => {
    return (
        <HomeBoardGroup
            extraClass="req"
            title="System Requirements"
        >

            <div className="ran-home__board-req__list">
                {
                    ARR?.map((item, index) => {
                        return <ItemRow
                            key={index}
                            item={item}
                        />
                    })
                }
            </div>

        </HomeBoardGroup>
    )
}

export default HomeBoardReq;

const ItemRow = ({
    item,
}) => {
    return (
        <div className="ran-home__board-item">
            <h4 className="fs--16px">{ item?.title }</h4>
            <p className="fs--12px">{ item?.desc }</p>
        </div>
    )
}