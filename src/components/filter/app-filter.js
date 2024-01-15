import { useState } from 'react';
import './app-filter.scss';

const AppFilter = ({ updateFilter, newFilter }) => {
    const [ filter, setFilter ] = useState('all');

    const btnData = [
        { name: 'Brazil', label: 'Brazil' },
        { name: 'Kenya', label: 'Kenya' },
        { name: 'Columbia', label: 'Columbia' }
    ];

    const onUpdateFilter = (name) => {
        if (filter === name) {
            setFilter('all');
            updateFilter('all');
            return;
        }

        setFilter(name);
        updateFilter(name);
    }
    
    const buttons = btnData.map(({ name, label }) => {
        const clazz = newFilter === name || filter !== newFilter ? 'app-filter__btn app-filter__btn_active' : 'app-filter__btn';

        return (
            <button type="button"
                    className={ clazz }
                    key={ name }
                    onClick={ () => onUpdateFilter(name) }>
                    { label }
            </button>
        )
    })

    return (
        <div className='app-filter'>
            <div className="app-filter__text">Or filter</div>
            <div className="app-filter__btns">
                { buttons }
            </div>
        </div>
    )
}

export default AppFilter;