import React from 'react';
import './App.css';
import { ListItems } from './Listitems';
import { Searchbox } from './Searchbox';


export class App extends React.Component {
   state = {
     monsters: [],
     selectedItem: ''
   }

   componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({monsters: users}))
   }
   onSubmit = event => {
     this.setState({selectedItem: event.target.value})
   }
  render() {
    const { monsters, selectedItem} = this.state;
    const filterMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(selectedItem.toLowerCase())
    })
    return (
      <div className='app'>
        <Searchbox search={selectedItem} onSubmit={this.onSubmit} />
       <ListItems monsters={filterMonsters} />
      </div>
    )
  }
}