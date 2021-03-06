import React from 'react';

class BackendService extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            host: null
        };
    }

    componentDidMount() {
        // console.log(process.env.REACT_APP_BACKEND_SERVER)
        // var BACKEND_SERVER=process.env.REACT_APP_BACKEND_SERVER
        const { REACT_APP_BACKEND_SERVER } = process.env;
        console.log(REACT_APP_BACKEND_SERVER)
        fetch(location.protocol + '//' + REACT_APP_BACKEND_SERVER + '/app', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => this.setState({ host: data.host }));

    }

    render() {
        const { host } = this.state;
        return (
            <div>
                <b>React A-Sync GET requests using 'fetch'</b>
                <br></br>
                The host value is pulled from backend API. Each GET goes to different pod.
                <br></br>
                Host from BackendService: <code>{host}</code>
            </div>
        );
    }
}

export { BackendService }; 