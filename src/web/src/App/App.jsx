import React from 'react';

import { BackendService } from './';


class App extends React.Component {
    render() {
        return (
            <div>
                {/* <p>React HTTP GET Requests with Fetch</p> */}
                <h2>Generic Service</h2>
                <BackendService />
                {/* <GetRequestHooks />
                <GetRequestAsyncAwait />
                <GetRequestErrorHandling />
                <GetRequestSetHeaders /> */}
            </div>
        );
    }
}

export { App }; 