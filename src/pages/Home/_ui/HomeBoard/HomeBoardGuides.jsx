

import Tag from "components/Tag"

import HomeBoardGroup from "./HomeBoardGroup"

const ARR = [
    { tag: 'Pdf', title: 'How to Top-up?', date: 'Oct. 05, 2024', bg: '#FFA387' },
    { tag: 'Pdf', title: 'War Schedule', date: 'Sept. 20, 2024', bg: '#FFA387' },
    { tag: 'Pdf', title: 'Boss Hunt Guide', date: 'Jun. 10, 2024', bg: '#FFA387' },
];

const HomeBoardGuides = () => {
    return (
        <HomeBoardGroup
            extraClass="important-guides"
            title="Important Guides"
        >

            {
                ARR?.map((item, index) => {
                    return <ItemRow
                        key={index}
                        item={item}
                    />
                })
            }

        </HomeBoardGroup>
    )
}

export default HomeBoardGuides;

const ItemRow = ({
    item,
}) => {
    return (
        <div className="ran-home__board-item">
            <Tag
                text={item?.tag}
                bgColor={item?.bg}
            />
            <div>
                <h4 className="fs--16px">{ item?.title }</h4>
                <p className="fs--12px">{ item?.date }</p>
            </div>
        </div>
    )
}