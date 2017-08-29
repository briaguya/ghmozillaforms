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
    console.log(e.formData);
    var headers = new Headers();
    headers.append('Authorization', 'token v1.086ca559d9650859999960e49ef07aa882f44352');
    headers.append('Content-Type', 'application/vnd.github.v3+json');

    fetch('https://api.github.com/repos/briaguya/ghmozillaforms/issues', 
    {
      method: 'POST',
      mode: 'cors',
      headers: headers,
      body: JSON.stringify(e.formData)
    }).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        var blob = data;
        console.log(blob);
      });
      console.log(response);
    }

    );
  }

  render() {
    return (
      <div>
        <button onClick={this.getAuth.bind()}/>
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
