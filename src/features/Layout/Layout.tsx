import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../app/routes';

type Props={
    children?:JSX.Element|JSX.Element[]
};

const Layout=({children}: Props)=>{

    return (
        <>
        <h1>Layout</h1>
        <Link to={routes.home}>Main</Link>
        {children}
        </>
    )
};

export default Layout;