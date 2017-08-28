import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import schema from './schema';

// POST /repos/:owner/:repo/issues
// https://api.github.com/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {newIssueCreated: false};
  }

  handleSubmit(e) {
    this.setState({newIssueCreated: true});
    console.log(e);
    fetch('https://api.github.com/repos/briaguya/ghmozillaforms/issues', 
    {
      method: 'POST',
      body: e.body
    }).then(function(response) {
      console.log(response);
    }

    );
  }

  render() {
    console.log(this.state.newIssueCreated)
    return (
      <div>
        <Form schema={schema} onSubmit={this.handleSubmit.bind(this)} /> 
        {this.state.newIssueCreated ?
          <div>
            TODO: LINK TO ISSUE
          </div> : null
        }
      </div>
    );
  }
}

export default App;
