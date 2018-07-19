import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as action_type from '../actions/action-types';

class Landing_Dropdown extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return (
<Dropdown text='Filter Item by' multiple icon='arrow circle down'>
  <Dropdown.Menu>
    <Dropdown.Divider />
    <Dropdown.Header icon='tags' content='Items' />
    <Dropdown.Menu scrolling>
      <Dropdown.Item
        className="knives-dropdown"
        onClick={ this.props.getKnivesPic }>Knives</Dropdown.Item>
      <Dropdown.Item
        className="bowls-dropdown"
        onClick={ this.props.getBowlsPic }>Bowls</Dropdown.Item>
      <Dropdown.Item
        className="statues-dropdown"
        onClick={ this.props.getStatuePic }>Statues</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown.Menu>
</Dropdown>
    )
  }
}

const mapDispatchToProps = dispatch => {
   return {
     getKnivesPic: () => dispatch({ type: action_type.KNIVES_API_REQUEST }),
     getBowlsPic: () => dispatch({ type: action_type.BOWLS_API_REQUEST }),
     getStatuePic: () => dispatch({ type: action_type.STATUES_API_REQUEST })
   }
}


export default connect(null, mapDispatchToProps)(Landing_Dropdown);
