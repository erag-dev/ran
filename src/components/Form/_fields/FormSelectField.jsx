
import { forwardRef } from "react"

const FormSelectField = forwardRef(({
    extraClass,
    options,
    ...props
}, ref) => {
    
    return (
        <div className="select-holder">
            <select
                {...props}
                className={`apply-border ${extraClass ? extraClass : ''}`}
                disabled={!options || options.length === 0}
                ref={ref}
                onChange={props.onChange}
            >
                {
                    options.map((opt, optIndex) => {
                        return <option 
                            key={optIndex} 
                            value={opt.value}
                        >
                            {opt.label}
                        </option>
                    })
                }
            </select>
        </div>
    )
})

export default FormSelectField;