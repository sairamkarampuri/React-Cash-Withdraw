// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, reduceAmount} = props
  const {id, value} = denomination

  const withdraw = () => {
    reduceAmount(value)
  }

  return (
    <li className="list-item-container">
      <button type="button" className="button" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
