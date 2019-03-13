import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from '../Auth';

function SecuredAdminRoute(props) {
    const { component: Component, path, checkingSession, admin } = props;
    return (
        <Route path={path} render={() => {
            if (checkingSession) return <h3 className="text-center mt-4">Loading...</h3>;
            if (!auth0Client.isAuthenticated()) {
                auth0Client.signIn();
                return <div></div>;
            }
            if (admin !== true) {
                return<div></div>
            } else {
            return <Component />
            }
        }} />
    );
}

export default SecuredAdminRoute;