

import "./_styles.sass"

const SectionFilters = ({
    extraClass,
    children
}) => {
    return (
        <section className={`${extraClass} ran-box frame overflow--visible`}>
            <div className="frame__limit">

                { children }
               
            </div>
        </section>
    )
}

export default SectionFilters;