import React, { Component } from 'react'; 

import {Container,Button,ListGroup, ListGroupItem  } from 'reactstrap';
import { CSSTransition , TransitionGroup  } from 'react-transition-group';

import {connect} from 'react-redux'; 
import {getItems , addItem , deleteItem} from '../../redux/actions/itemsAction';

class ShoppingList extends Component {
 
    componentDidMount(){ 
        this.props.getItems();
    }

    onDelete = (id)=>{ 

        this.props.deleteItem(id);
    }

  render() {      
     const {items} = this.props.item;
    return (
      <div>
         <Container>
             
             <ListGroup>
                 <TransitionGroup className="shopping-list">
                 {items.map(({id,name})=>(
                    <CSSTransition key={id} timeout={500} classNames="fade"> 
                         <ListGroupItem>
                            <Button
                             className="remove-btn"
                             color="danger"
                             size="sm"
                             onClick={this.onDelete.bind(this,id)}
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

const mapStateToProps = (state)=>({ 
    item : state.item  // item represent the whole item state 
})

const mapDispatchToProps = (dispatch)=> ({ 
    getItems : ()=>{dispatch(getItems)},
    addItem  : ()=>{dispatch(addItem())},
    deleteItem : (id) => {dispatch(deleteItem(id)) }
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);