
const AppImg = ({
    extraClass,
    src,
    alt,
    ...props
}) => {
    return(
        <img
            className={extraClass ? extraClass : ''}
            src={src}
            alt={alt ? alt : ""}
            onClick={props.onClick}
            {...props}
        />
    )
}

export default AppImg;