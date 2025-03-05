
const FormRow = ({
    children,
    ...props
}) => {
    const { label, extraClass } = props;
    
    return <div className={`form__row ${
        extraClass ? `row--${extraClass}` : `row--${label.toLowerCase()}`
    }`}>
        <p className="form__label">{ label }</p>

        {children}
    </div>
}

export default FormRow;