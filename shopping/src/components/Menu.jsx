import React, { Component } from 'react'
import itemslist from './items.json'
export default class Menu extends Component {
    constructor() {
        super()
        this.state = {
            items: itemslist,
            price: 0,
            cartlist:[]
        }
    }
    onclickadd = (e) => {
        const addeditem=this.state.items.filter(item => {
            return item.name == e.target.value
        })
        this.setState({
            cartlist: this.state.cartlist.concat(e.target.value),
            price: this.state.price+ addeditem[0].price
        })
    }
    render() {
        const stepsize = this.state.step;
        const data = this.state.items;
        const maprows = data.map(items => {
            return (<div className="items" key={items.name}>
                <img src={items.img} alt={items.name} width={100} height={100} />
                <h3>{items.name}</h3>
                <p> Rs.{items.price}</p>
                <button className="button" value={items.name} onClick={this.onclickadd}>+</button>
            </div>)
        })
        return (
            <div className="main-component">
                <h1>Menu</h1><h2><button className="button">
                    <img src="https://static.thenounproject.com/png/7352-200.png" alt="CArt" width={30} height={27} />
                </button></h2>
                <div className="items-list">
                    {maprows}
                </div>


            </div>
        )
    }
}
