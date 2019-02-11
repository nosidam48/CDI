const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Variable to check the jwt ID token.
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-pzu1ax5c.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'qERXk4yg7W7ZmmIULlj5hWLlsr22WXQd',
  issuer: `https://dev-pzu1ax5c.auth0.com/`,
  algorithms: ['RS256']
});

module.exports = checkJwt;