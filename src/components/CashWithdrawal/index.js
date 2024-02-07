// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)

    this.state = {balace: 2000}
  }

  reduceAmount = amount => {
    this.setState(prevState => ({balace: prevState.balace - amount}))
  }

  render() {
    const {balace} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-section">
            <div className="name-section">
              <div className="profile-image">S</div>
              <h1 className="user-name">Sarah Williams</h1>
            </div>
            <div className="balace-section">
              <p className="your-balace">Your Balance</p>
              <div>
                <p className="balace-amount">{balace}</p>
                <p className="currency">in Rupees</p>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <p className="balace-amount">Withdraw</p>
            <p className="your-balace">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denomination-container">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  denomination={eachDenomination}
                  key={eachDenomination.id}
                  reduceAmount={this.reduceAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
