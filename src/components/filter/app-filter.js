import './app-filter.scss';

const AppFilter = (props) => {

    const btnData = [
        { name: 'brazil', label: 'Brazil' },
        { name: 'kenya', label: 'Kenya' },
        { name: 'columbia', label: 'Columbia' }
    ];

    const buttons = btnData.map(({ name, label }) => {
        const clazz = props.filter === name ? 'app-filter__btn app-filter__btn_active' : 'app-filter__btn'

        return (
            <button type="button"
                    className={ clazz }
                    key={ name }
                    onClick={ () => props.onUpdateFilter(name) }>
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