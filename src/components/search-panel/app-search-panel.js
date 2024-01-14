import { useState } from 'react';
import './app-search-panel.css';

const AppSearchPanel = ({ onUpdateSearchTerm }) => {
    
    const [ term, setTerm ] = useState('');

    const onValueChange = (e) => {
        const term = e.target.value;
        setTerm(term);
        onUpdateSearchTerm(term);
    }

    // console.log('AppSearchPanel');

    return (
        <div className="app-search-panel">
            <div className="app-search-panel__text">Lookiing for</div>
            <input type="text" 
                   placeholder="start typing here..." 
                   value={ term }
                   className="app-search-panel__input"
                   onChange={ onValueChange }/>
        </div>
    )
}

export default AppSearchPanel;