
const FormGroup = ({
    extraClass,
    hasInline,
    isBy2,
    children
}) => {
    return (
        <div className={`form__group ${
            extraClass ? extraClass : ''
        } ${
            hasInline ? 'display__inline' : ''
        } ${
            isBy2 ? 'by-2 border--s align--t' : ''
        }`}>
            {children}
        </div>
    )
}

export default FormGroup;