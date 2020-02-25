import React, {Component} from 'react'
import './App.css'
import {Button} from '@material-ui/core'

export default class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      dog: "https://random.dog/woof.json",
      normal: "/?random",
      gray: "/?frayscale",
      items: '',
    }
  }

  URL_dog() {
    this.setState({cat_url: this.state.dog})
  }

  componentDidMount() {
    return fetch(this.state.dog)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          items: "" + resJson.url
        })
      })
  }

  render() {
    return(
      <div className="App">
        <div>
          <p>{this.state.items}</p>
          <img src={this.state.items}
            max-width = {300}
            height = {300}
            max-height = {300}
            margin-bottom = {1}
          ></img>
        </div>
        <div>
          <Button
            onClick = {() => window.location.reload()}
            variant = 'contained'
            color = 'primary'
          >
          reload
          </Button>
        </div>
      </div>
    )
  }
}
