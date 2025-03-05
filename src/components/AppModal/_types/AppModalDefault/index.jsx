
import AppImg from "components/AppImg"

import iconClose from "assets/close.svg"

import "./_styles.sass"

const AppModalDefault = ({
    extraClass,
    modalSize,
    modalState,
    callbackIsOpen,
    children
}) => {

    return (
        <div 
            className={`modal-holder ${
                extraClass ? extraClass : ''
            } ${ 
                modalState ? "is--active" : "" 
            }`}
        >
            <div 
                className="modal-wrapper" 
                onClick={() => callbackIsOpen(false)}
            ></div>
            <div className={`modal ${modalSize ? modalSize : 'modal--s'}`}>
                <div 
                    className="modal__close" 
                    onClick={() => callbackIsOpen(false)}
                >
                    <AppImg src={iconClose} />
                </div>
                <div className="modal__contents">

                    { children }

                </div>
            </div>
        </div>
    )
}

export default AppModalDefault;