import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
export class ShopItem extends Component {
    state= {showForm: false}
    showForm = () => {
        return (
            <div> 
                <form id= "add-app">
 
                    <label>Application Name : </label>
                    <input type="text"> </input>
 
                    <label> id : </label>
                    <input type="text" ></input>
 
                    <label>Server details : </label>
                    <input ></input>
 
                    <button>Create</button>
               </form>
           </div>
        );
     }
  render() {
    let {title , description ,image,price,rating} = this.props;
    return (<>
        <Card style={{ backgroundColor:'#ffcccb',maxWidth:'375px',marginBottom:'42px'}}>
        <Badge bg="danger" style={{marginLeft:'250px',zIndex:'1',marginTop:'-25px'}}>{rating}</Badge>
        <Card.Img variant="top" src={image} style={{height:'400px'}} />
        <Card.Body>
        
          <Card.Title>{title}..</Card.Title>
          <Card.Text>{description}..</Card.Text>
        <Card.Text style={{fontWeight:'bolder',backgroundColor:'ButtonHighlight',borderRadius:'20px', width:'100px',marginLeft:'140px'}}>${price}</Card.Text>
          <Button variant="primary" onClick={() => this.setState({showForm: true})}  style={{cursor:'pointer'}}>Buy</Button>
        </Card.Body>
      </Card>
      </>
    )
  }
}

export default ShopItem
