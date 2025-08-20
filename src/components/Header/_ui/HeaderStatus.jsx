
const HeaderStatus = () => {
    return(
        <div className="ran-header__statuses">
            <div className="ran-header__status status--server">
                <p>Server: <span>Busy</span></p>
            </div>
            <div className="ran-header__status status--players">
                <p>Players Online: <span>1,201</span></p>
            </div>
        </div>
    )
}

export default HeaderStatus;