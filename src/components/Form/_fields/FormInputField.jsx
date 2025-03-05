
import { forwardRef } from "react"

const FormInputField = forwardRef(({
    extraClass,
    type,
    ...props
}, ref) => {
    
    return (
        <input
            {...props}
            type={type ? type : 'text'}
            className={`apply-border ${extraClass ? extraClass : ''}`}
            ref={ref}
        />
    )
})

export default FormInputField;