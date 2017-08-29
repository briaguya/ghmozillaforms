import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import schema from './schema';

// POST /repos/:owner/:repo/issues
// https://api.github.com/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {newIssueURL: null};
  }

  handleSubmit(e) {
    var headers = new Headers();
    headers.append('Authorization', 'token v1.19486cf990bc967c711d7b181b64a9e6b53af9db');
    headers.append('Content-Type', 'application/vnd.github.v3+json');

    fetch('https://api.github.com/repos/briaguya/ghmozillaforms/issues', 
    {
      method: 'POST',
      mode: 'cors',
      headers: headers,
      body: JSON.stringify(e.formData)
    }).then(response => response.json())
      .then(json => {
        this.setState({newIssueURL: json.html_url});
        console.log(this.state.newIssueURL);
      });
  }

  render() {
    return (
      <div>
        <Form schema={schema} onSubmit={this.handleSubmit.bind(this)} /> 
        {this.state.newIssueURL ?
          <div>
            <a href={this.state.newIssueURL}>New Issue Created</a>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
