
import AppImg from "components/AppImg"

import imgRan from "assets/ran.png"

import "./_styles.sass"

const SectionIntro = ({
    extraClass,
    topText,
    subtitle,
    bg,
    children
}) => {
    return (
        <section className={`${extraClass} ran-subpageintro frame`}>

            <div className="frame__bg size--cover" style={{backgroundImage: `url(${bg})`}}></div>

            <div className="frame__limit">

                <AppImg src={imgRan} extraClass="ran-subpageintro__logo" />

                <h2 className="frame__header">{ topText }</h2>

                {
                    subtitle ? (
                        <h4 className="ran-subpageintro__subtitle">{ subtitle }</h4>
                    ): null
                }

                { children }

            </div>
        </section>
    )
}

export default SectionIntro;