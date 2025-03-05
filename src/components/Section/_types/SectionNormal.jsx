

const SectionNormal = ({
    extraClass,
    children
}) => {
    return (
        <section className={`${extraClass} frame`}>
            <div className="frame__limit">

                { children }

            </div>
        </section>
    )
}

export default SectionNormal;