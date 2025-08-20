
const HomeBoardGroup = ({
    extraClass,
    title,
    children
}) => {
    return (
        <div className={`ran-home__board-group group--${extraClass}`}>
            
            {
                title ? (
                    <h2 className="fs--20px">{ title }</h2>
                ): null
            }

            { children }

        </div>
    )
}

export default HomeBoardGroup;