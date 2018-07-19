import React, { Component } from 'react';


class Store_Search_Modal extends React.Component{

  constructor(props){
    super(props)

    this.state = { search: false };
  }

  render(){
    return(
      <div className="store-search-modal">
       <i onClick={this.props.closeSearchModal}
        className="fas fa-times"></i>
       <section className="main-section">
        <div className="logo">Skay</div>
         <input label="Search" placeholder="Search for beauty product" />
       </section>
      </div>
    )
  }
}


export default Store_Search_Modal;
