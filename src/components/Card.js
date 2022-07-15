import './Card.css'

const Card = (props)=>{
    const clazzes = "card " + props.className;
    return <div className={clazzes}>{props.children}</div>
};

export default Card;