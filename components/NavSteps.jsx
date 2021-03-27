export default function NavSteps(props) {
    const { steps } = props
    const showSteps = steps.map(step => {
        return <span className={step.currentSelection ? 'selected' : 'normal' }>{step.id} | </span>
    })
    return <div>
        {showSteps}
    </div>
}