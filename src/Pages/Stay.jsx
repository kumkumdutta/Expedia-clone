import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
 //import data from "./city";
function Stay() {
    const data = [
        {
            id: 0,
            name: 'Kolkota'
          },
          {
            id: 1,
            name: 'Mumbai'
          },
          {
            id: 2,
            name: 'Pune'
          },
          {
            id: 3,
            name: 'Haidrabad'
          },
          {
            id: 4,
            name: 'Bhubaneswar'
          }
    ]
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (data) => {
    // the item selected
    console.log(data)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (data) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {data.id}</span> */}
        <span style={{ display: 'block', textAlign: 'left' }}>{data.name}</span>
      </>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={data}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default Stay