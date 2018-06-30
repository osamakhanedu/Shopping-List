import React, { Component } from 'react'; 

import {Container,Button,ListGroup, ListGroupItem  } from 'reactstrap';
import { CSSTransition , TransitionGroup  } from 'react-transition-group';
import uuid  from 'uuid';


class ShoppingList extends Component {
 
    state = { 
        items :[
            { id : uuid() , name:"Shoes"},
            { id : uuid() , name:"Clothes"},
            { id : uuid() , name:"TShirts"},
            { id : uuid() , name:"Pents"}   
        ]
    }

  render() {
     const {items} = this.state;
    return (
      <div>
         <Container>
             <Button
                color="dark"
                style={{marginBottom: "2rem"}}
                onClick={ ()=>{ 
                    const name = prompt("Enter The Item Name")
                    if(name){ 
                        let items = this.state.items.slice();
                        items.push({id:uuid(),name})
                        this.setState({items})
                    }
                    }}
             >Add Item</Button>
         </Container>
      </div>
    )
  }
}

export default ShoppingList;