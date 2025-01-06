import App from "../../App"

const New = (props)=>{
    const {title,icon,description} = (props)
    return (
        <li>
        <p>{title}</p>
        <h2>{icon}</h2>
        <p>{description}</p>
        </li>
    )
}

export default New;