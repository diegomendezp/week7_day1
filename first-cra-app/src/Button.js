import "./Button.css"
const Button = (props) => {

  const targetValue = props.newTab ? "_blank" : "_self";
  return (
    <a
      href={props.link}
      target={targetValue}
    >
      Link to {props.name} bio
    </a>
  )
}

export default Button;