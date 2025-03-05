
import AppImg from "components/AppImg"

import edgeTop from "assets/edge-top.png"
import edgeBottom from "assets/edge-bot.png"

const SectionWithEdges = ({
    extraClass,
    children
}) => {
    return (
        <section className={`${extraClass} frame overflow--visible`}>

            <div className="frame__bg">
                <AppImg src={edgeTop} extraClass="frame__edge edge--1" />
                <AppImg src={edgeBottom} extraClass="frame__edge edge--2" />
            </div>

            <div className="frame__limit">

                { children }

            </div>
        </section>
    )
}

export default SectionWithEdges;