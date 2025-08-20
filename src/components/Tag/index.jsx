
import "./_styles.sass"

const Tag = ({
    text,
    bgColor,
}) => {
    return(
        <div 
            className="ran-tag"
            style={{backgroundColor: bgColor}}
        >
            <p>{ text }</p>
        </div>
    )
}

export default Tag;