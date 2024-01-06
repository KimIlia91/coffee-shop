import React from 'react';
import './app-search-panel.css';

class AppSearchPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className="app-search-panel">
                <div className="app-search-panel__text">Lookiing for</div>
                <input type="text" 
                       placeholder="start typing here..." 
                       value={ this.state.term }
                       className="app-search-panel__input"
                       onChange={ this.onUpdateSearch }/>
            </div>
        )
    }
}

export default AppSearchPanel;