
const FormWrap = ({
    extraClass,
    children,
    ...props
}) => {

    return (
        <form
            className={extraClass}
            method="POST"
            autoComplete="off"
            {...props}
        >

            { children }
            
        </form>
    )
}

export default FormWrap;