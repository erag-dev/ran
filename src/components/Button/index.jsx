
import "./_styles.sass"

const Button = ({
    extraClass,
    btnLbl,
    isDiv,
    ...props
}) => {
    return (
        <>
            {
                isDiv ? (
                    <div 
                        className={`${extraClass ? extraClass : ''} btn`}
                        onClick={props.onClick}
                    >   
                        <p className="btn__text">{ btnLbl }</p>
                    </div>
                ) : (
                    <button 
                        className={`${extraClass ? extraClass : ''} btn`}
                    >   
                        <p className="btn__text">{ btnLbl }</p>
                    </button>
                )
            }
        </>
    )
}

export default Button;