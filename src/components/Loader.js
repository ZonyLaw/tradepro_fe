import React from 'react'
import {Spinner} from 'react-bootstrap'

function Loader() {
  return (
    <div>
      <Spinner
        animation="border"
        role="status"
        sytle={{
          height: '100px',
          width: '100px',
          margin: 'auto',
          display: 'block',
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader
