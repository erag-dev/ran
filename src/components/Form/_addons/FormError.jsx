
const FormError = ({
    extraClass,
    errorMessage,
}) => {
    return (
        <p className={`form__error ${
            extraClass ? extraClass : ''
        }`}>
            {errorMessage}
        </p>
    )
}

export default FormError;