
import "./_styles.sass"

const SectionIntro = ({
    extraClass,
    topText,
    children
}) => {
    return (
        <section className={`${extraClass} snuggle-subpageintro frame`}>
            <div className="frame__limit">

                <p className="snuggle-subpageintro__toptext">{ topText }</p>

                { children }

            </div>
        </section>
    )
}

export default SectionIntro;