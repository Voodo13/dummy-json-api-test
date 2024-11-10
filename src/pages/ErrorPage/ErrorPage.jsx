import React from 'react';
import {useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h3>
                <i>{error.status} </i>
                <i>{error.statusText || error.message}</i>
            </h3>
        </div>
    );
};


