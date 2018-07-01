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

             <ListGroup>
                 <TransitionGroup className="shopping-list">
                 {items.map(({id,name})=>(
                    <CSSTransition key={id} timeout={500} classNames="fade"> 
                         <ListGroupItem>
                            <Button
                             className="remove-btn"
                             color="danger"
                             size="sm"
                             onClick={()=>{ 
                                 let items = this.state.items.filter(item => item.id !== id); 
                                 this.setState({items});

                             }}
                            >&times;</Button>
                             {name}
                         </ListGroupItem>
                    </CSSTransition>
                 ))}
                 </TransitionGroup> 
             </ListGroup>
         </Container>
      </div>
    )
  }
}

export default ShoppingList;