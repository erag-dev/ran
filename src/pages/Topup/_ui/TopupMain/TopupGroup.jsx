
const TopupGroup = ({
    extraClass,
    title,
    children
}) => {

    return(
        <div className={`ran-topup__group group--${extraClass}`}>
            <div>
                <h2 className="frame__header fs--20px">{ title }</h2>

                { children }
            </div>
        </div>
    )
}

export default TopupGroup;
