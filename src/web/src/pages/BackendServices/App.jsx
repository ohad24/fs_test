import React from 'react';

import { BackendService1 } from './';


class App extends React.Component {
    render() {
        return (
            <div>
                {/* <p>React HTTP GET Requests with Fetch</p> */}
                <h2>Generic Service</h2>
                <BackendService1 />
                {/* <GetRequestHooks />
                <GetRequestAsyncAwait />
                <GetRequestErrorHandling />
                <GetRequestSetHeaders /> */}
            </div>
        );
    }
}

export { App }; 