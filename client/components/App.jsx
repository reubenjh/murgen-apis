import React from 'react'

import {getFruits} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fruits: ['potatoes', 'apples', 'oranges']
    }
  }

  componentDidMount () {
    getFruits()
      .then(fruits => {
        let newFruits = fruits
        newFruits.push(this.state.fruits[0])
        newFruits.push(this.state.fruits[1])
        newFruits.push(this.state.fruits[2])
        this.setState({
          fruits: newFruits
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>icanhazRonSwansonhaiku'z</h1>
        <ul>
          {this.state.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
