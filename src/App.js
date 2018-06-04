import React, { Component } from 'react';
import ListSide from './components/ListSide';
import InfoSide from './components/InfoSide';

class App extends Component {
    render() {
        return (
            <div className="mainScreen clearfix" >
                <ListSide />
                <InfoSide />
            </div>
        );
    }
}

export default App;
