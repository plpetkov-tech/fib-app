import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Im in some other page!<br></br>
            <Link to = "/">Go back home</Link>
        </div>
    );
};