import './app-search-panel.scss';

const AppSearchPanel = ({ onUpdateSearchTerm }) => {

    const onUpdateSerchTerm = (e) => {
        onUpdateSearchTerm(e.target.value);
    }

    return (
        <div className="app-search-panel">
            <div className="app-search-panel__text">Lookiing for</div>
            <input type="text" 
                   placeholder="start typing here..." 
                   className="app-search-panel__input"
                   onChange={ onUpdateSerchTerm }/>
        </div>
    )
}

export default AppSearchPanel;