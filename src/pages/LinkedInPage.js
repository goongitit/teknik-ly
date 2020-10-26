import React, { Component } from 'react'
import { LinkedIn } from 'react-linkedin-login-oauth2'

export default class LinkedInPage extends Component {

  state = {
    code: '',
    errorMessage: '',
  }

//
  handleSuccess = (data) => {
    this.setState ({
      code: data.code,
      errorMessage: ''
    })
  }

//let us know what went wrong, taking in the error as a param and displaying it
  handleFailure = (error) => {
    this.setState ({
      code: '',
      errorMessage: error.errorMessage
    })
  }

  render () {//TODO change localhost
    const { code, errorMessage } = this.state
    return <div>
        <LinkedIn
          clientId='81lx5we2omq9xh'
          onFailure={ this.handleFailure }
          onSuccess={ this.handleSuccess }
          redirectUri='http://localhost:3000/linkedin'
        >
          <img
            src={ require('../images/linkedin.png') }
            alt='Log in with Linked In'
            style={{ maxWidth: '180px' }}
          />
        </LinkedIn>
        { !code && <div>No code</div> }
        { code && <div>Code: {code}</div> }
        { errorMessage && <div>{ errorMessage }</div> }
    </div>
  }

}
