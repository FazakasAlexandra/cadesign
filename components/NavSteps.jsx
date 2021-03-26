export default function NavSteps() {
    const { steps } = props
    const showSteps = steps.map(step => {
        return <span className={currentSelection ? 'selected' : 'normal' }>{step.id}</span>
    })
    return <div>
        {showSteps}
    </div>
}