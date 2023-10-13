import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';


export class Page extends Component {
    
  render() {
    return (
        <div className='container d-flex justify-content-between'>
            <Button variant="warning" onClick={alert('hello')} > &larr; Previous</Button>
            <Button variant="warning" onClick={alert('hello')} >Next &rarr;</Button>
        </div>
    )
  }
}

export default Page
