

import "./_styles.sass"

const SectionBox = ({
    extraClass,
    children
}) => {
    return (
        <section className={`${extraClass} ran-filters frame`}>
            <div className="frame__limit">

                { children }
               
            </div>
        </section>
    )
}

export default SectionBox;