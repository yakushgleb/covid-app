import React from 'react'

const WorldFilter = ({ activeButton, setDefaultFilter, setConfirmedFilter, setRecoveredFilter, setDeathFilter }) => {
    return (
        <section className='covid-app__section covid-app__filter'>
            <span>
                <span>Sorted by:</span>
                <button className={activeButton === 'default' ? 'selected' : null} onClick={setDefaultFilter}>Default</button>
                <button className={activeButton === 'confirmed' ? 'selected' : null} onClick={setConfirmedFilter}>Confirmed</button>
                <button className={activeButton === 'recovered' ? 'selected' : null} onClick={setRecoveredFilter}>Recovered</button>
                <button className={activeButton === 'death' ? 'selected' : null} onClick={setDeathFilter}>Deaths</button>
            </span>
            <span>
                <input placeholder='Country title...' />
                <button>Search</button>
            </span>
        </section>
    )
}

export default WorldFilter