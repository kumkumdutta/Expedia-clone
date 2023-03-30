import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
 import data from "./city";
 import { FaMapMarkerAlt } from 'react-icons/fa';
 import { MdLocationOn } from 'react-icons/md';
function Stay() {
   
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
      <header  style={{ backgroundColor:"white", border:"2px solid red"}}>
        <div style={{ width: 400}}>
          <ReactSearchAutocomplete
            items={data}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            formatResult={formatResult}
            showIcon={false}
            placeholder={"Going to"}
            styling={{ height: "44px",
              border: "1px solid #dfe1e5",
              borderRadius: "6px",
              backgroundColor: "white",
              boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
              hoverBackgroundColor: "#eee",
              color: "#212121",
              fontSize: "16px",
              fontFamily: "Arial",
              searchIconMargin: '0 0 0 16px',
             }}
          />
        </div>
      </header>
    </div>
  )
}

export default Stay