

import Tag from "components/Tag"

import HomeBoardGroup from "./HomeBoardGroup"

const ARR = [
    { tag: 'Event', title: 'PK @ SG Hole Showdown IV', date: 'Oct. 05, 2024', bg: '#FFF04B' },
    { tag: 'Event', title: '3 vs. 3 Tournament - 2024', date: 'Sept. 20, 2024', bg: '#FFF04B' },
    { tag: 'Update', title: 'Added ‘Kadera’ NPC to celebrate...', date: 'Jun. 10, 2024', bg: '#4BD8FF' },
];

const HomeBoardAnnouncement = () => {
    return (
        <HomeBoardGroup
            extraClass="announcement"
            title="Announcements"
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

export default HomeBoardAnnouncement;

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