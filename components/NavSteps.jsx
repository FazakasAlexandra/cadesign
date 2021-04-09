import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function NavSteps({ steps, setSteps }) {
    const [currentStep, setCurrentStep] = useState(1)
    const handleSelectStep = stepId => {
        if (stepId <= 0 || stepId > steps.length) return
        const updatedSteps = steps.map(step => {
            if (stepId === step.id) {
                setCurrentStep(stepId)
                return { ...step, currentSelection: true }
            }
            return { ...step, currentSelection: false }
        })
        setSteps(updatedSteps)
    }
    const showSteps = steps.map((step, idx) => {
        return <div key={idx} className="number-wraper"><a onClick={() => handleSelectStep(step.id)} className={step.currentSelection ? 'number selected' : 'number normal'}>{step.id}</a></div>
    })
    return <div className="navsteps-wraper">
        <div className="navsteps numbers">
            {showSteps}
        </div>
        <div className="navsteps pagination">
            <div className="pagination-button prev" onClick={() => handleSelectStep(currentStep - 1)}><FontAwesomeIcon icon={faAngleLeft} size="2x"/><span>Pasul Anterior</span></div>
            <div className="pagination-button next" onClick={() => handleSelectStep(currentStep + 1)}><span>Pasul Urmator</span><FontAwesomeIcon icon={faAngleRight} size="2x"/></div>
        </div>
    </div>
}