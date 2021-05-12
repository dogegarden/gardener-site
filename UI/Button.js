export const Button = ({
    disabled, //boolean
    size, //array || number
    borderRadius,
    borderColor,
    backgroundColor,
    textColor,
    textSize,
    text,
    icon,
}) => {
    const styleObject = {
        backgroundColor: backgroundColor,
        color: textColor,
        fontSize: textSize,
        border: `2px solid ${borderColor}`,
        borderRadius: borderRadius,
        padding: size,

    }

    return (
        <button disabled={disabled} style={styleObject}>{icon == "" ? text : icon}</button>
    )
}