// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Srikanth Reddy'
    const initial = name.slice(0, 1)

    return (
      <div className="cash-withdrawal-app-container">
        <div className="cash-withdrawal-container">
          <div className="user-initial-container">
            <div className="initial-container">
              <p>{initial}</p>
            </div>
            <p className="userName">{name}</p>
          </div>
          <div className="user-balance-container">
            <p>Your Balance</p>
            <p>{balance}</p>
          </div>
          <div className="withDrawal-container">
            <h1>WithDrawal</h1>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  updateBalance={this.updateBalance}
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
