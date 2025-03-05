
import { forwardRef } from "react"

const FormTextAreaField = forwardRef(({
    extraClass,
    type,
    ...props
}, ref) => {
    
    return (
        <textarea
            {...props}
            className={`apply-border ${extraClass ? extraClass : ''}`}
            ref={ref}
        ></textarea>
    )
})

export default FormTextAreaField;