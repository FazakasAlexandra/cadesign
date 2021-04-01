export default function OrderStepCard(props) {
    return (<div className="order-step-card" id={props.id}>
        <div className="header">
            <div className="number-wraper">
                <span className="number selected">{props.number}</span>
            </div>
            <h1>{props.title}</h1>
        </div>
        <div className="text-container">
            <div>{props.text}</div>
        </div>
    </div>
    )
}