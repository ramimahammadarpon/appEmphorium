import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const {loading} = useContext(AuthContext);

    if(loading) {
        return <div className='min-h-[80vh] flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate to="/authentication/login"></Navigate>
    
};

export default PrivateRoute;