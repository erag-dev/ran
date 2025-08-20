

const SectionNormal = ({
    extraClass,
    bg,
    isBgRepeat,
    children
}) => {
    return (
        <section className={`${extraClass} frame`}>

            {
                bg ? (
                    <div 
                        className={`frame__bg size--cover ${isBgRepeat ? 'repeat' : ''}`} 
                        style={{backgroundImage: `url(${bg})`}}
                    ></div>
                ) : null
            }

            <div className="frame__limit">

                { children }

            </div>
        </section>
    )
}

export default SectionNormal;