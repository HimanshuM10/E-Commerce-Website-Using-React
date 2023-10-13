import React, { Component } from 'react'
import Shopitem from './ShopItem'
import { Button } from 'react-bootstrap';


export class ShoppingComponent extends Component {
  constructor(){
    super();
    this.state={
      items : this.items,
      loading: false,
      page:1
    }
  }
  async componentDidMount() {
    let t= await fetch(`https://fakestoreapi.com/products`).then(res=>res.json())
    this.setState({items: t, totalitems: Object(t).length});
    console.log(this.state.totalitems);
  }
  handleprevclick = ()=>{
    console.log("prev2")
    var t =  fetch(`https://fakestoreapi.com/products?page=${this.state.page-1}&limit=6`).then(res=>res.json())
    this.setState({
      page : this.state.page -1,
      items: t
    })
  }
   handlenextclick = ()=>{
    console.log("next2")
    if(this.state.page+1> Math.ceil(this.state.totalitems/6)){

    }
    else{
    let t = fetch(`https://fakestoreapi.com/products?page=${this.state.page+1}&limit=6`).then(res=>res.json())
    this.setState({
      page: this.state.page + 1,
      items: t
    })
  }
  }
  render() {
    return (
      <div style={{padding:'20px',fontWeight:'revert'}}>
      <div className='container my-3'>
        <h1 style={{padding:'20px',fontFamily:'fantasy'}}> Today's Deal </h1>
        <div className='row' style={{padding:'20px'}}>
        {this.state.items?.map((Element)=>{
          return <div className='col-md-4'>
          <Shopitem key={Element.id} title={Element.title} description={Element.description} image={Element.image} price={Element.price} rating={Element.rating.rate}/>
          </div>
        })}
        </div>
        <div className='container d-flex justify-content-between'>
            <Button variant="warning" disabled={this.state.page<=1} onClick={() => this.handleprevclick()} >&larr; Previous</Button>
            <Button variant="warning" onClick={() => this.handlenextclick()} >Next &rarr;</Button>
        </div>
      </div>
      </div>
    )
  }
}

export default ShoppingComponent
