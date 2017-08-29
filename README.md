To run this application you will need to get an authorization token by running getkey.rb

TODO: Distribute the .pem and generate these keys in a secure way.

curl -i -X POST -H "Authorization: Bearer {TOKEN FROM getkey.rb}" -H "Accept: application/vnd.github.machine-man-preview+json" https://api.github.com/installations/49076/access_tokens

Take the result from there and put it in the Authorization header in App.js
