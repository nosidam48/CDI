import auth0 from 'auth0-js';

// Sets user authentication functions through Auth0
class Auth {
  constructor() {
    // Set redirectUri based on production or dev mode
    if (process.env.NODE_ENV === "production") {
      this.auth0 = new auth0.WebAuth({
        domain: 'cdi2019.auth0.com',
        audience: 'https://cdi2019.auth0.com/userinfo',
        clientID: 'CEi4Rq-aEjddunnP1KxSnbnDXNH0sl8r',
        redirectUri: 'https://cdi2019.herokuapp.com/callback',
        responseType: 'id_token',
        scope: 'openid profile'
      });
    } else {
      this.auth0 = new auth0.WebAuth({
        domain: 'cdi2019.auth0.com',
        audience: 'https://cdi2019.auth0.com/userinfo',
        clientID: 'CEi4Rq-aEjddunnP1KxSnbnDXNH0sl8r',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'id_token',
        scope: 'openid profile'
      });
    }

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    })
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // set the time that the id token will expire at
    this.expiresAt = authResult.idTokenPayload.exp * 1000;
  }

  signOut() {
    if (process.env.NODE_ENV === "production") {
      this.auth0.logout({
        returnTo: 'https://cdi2019.herokuapp.com',
        clientID: 'CEi4Rq-aEjddunnP1KxSnbnDXNH0sl8r',

      });
    } else {
      this.auth0.logout({
        returnTo: 'http://localhost:3000',
        clientID: 'CEi4Rq-aEjddunnP1KxSnbnDXNH0sl8r',

      });
    }
  }

  silentAuth() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) return reject(err);
        this.setSession(authResult);
        resolve();
      });
    });
  }
}

const auth0Client = new Auth();

export default auth0Client;