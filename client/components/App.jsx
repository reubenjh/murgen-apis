import React from 'react'

import { getHaiku } from '../apiClient'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      haiku: ''
    }
  }

  componentDidMount() {
    getHaiku()
      .then((joke) => {
        this.setState({
          haiku: joke
        })
      })
  }

  render() {
    return (
      <div className='app'>
        <h1>icanhazRonSwansonhaiku'z</h1>
        <p>{this.state.haiku}</p>
      </div>
    )
  }
}

export default App
