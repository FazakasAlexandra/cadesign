import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function NavSteps(props) {
    const { steps } = props
    const showSteps = steps.map(step => {
        return <div className="number-wraper"><span className={step.currentSelection ? 'number selected' : 'number normal'}>{step.id}</span></div>
    })
    return <div className="navsteps-wraper">
        <div className="navstepts numbers">
            {showSteps}
        </div>
        <div className="navstepts pagination">
            <div className="pagination-button prev"><FontAwesomeIcon size="2x" icon={faAngleLeft}/><span>Pasul Anterior</span></div>
            <div className="pagination-button next"><span>Pasul Urmator</span><FontAwesomeIcon size="2x" icon={faAngleRight}/></div>
        </div>
    </div>
}