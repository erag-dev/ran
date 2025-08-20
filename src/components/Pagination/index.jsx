
import AppImg from "components/AppImg"

import arrPrev from "assets/arrow-prev.png"
import arrNext from "assets/arrow-next.png"

import "./_styles.sass"

const Pagination = () => {
    return (
        <div className="pagination">
            
            <div className="pagination__link pagination__arrow arrow--prev">
                <AppImg src={arrPrev} extraClass="img-fit" />
            </div>

            <PaginationLink text="1" />
            <PaginationLink text="2" />
            <PaginationLink text="3" />
            <PaginationLink text="..." />
            <PaginationLink text="10" />

            <div className="pagination__link pagination__arrow arrow--next">
                <AppImg src={arrNext} extraClass="img-fit" />
            </div>

        </div>
    )
}

export default Pagination;

const PaginationLink = ({
    text,
}) => {
    return (
        <div className="pagination__link">
            <p>{ text }</p>
        </div>
    )
}