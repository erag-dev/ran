
const CALL_TO_ACTIONS = [
    'DOWNLOAD GAME CLIENT',
    'PLAY FOR FREE, SIGN UP NOW!',
    'JOIN IN OUR DISCORD GROUP'
];

const FooterTop = () => {
    return (
        <div className="ran-footer__top">
            <div className="frame__limit">

                {
                    CALL_TO_ACTIONS?.map((item, index) => {
                        return <div
                            key={index}
                            className="ran-footer__top-calltoaction"
                        >
                            <p className="fs--16px">{ item }</p>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default FooterTop;