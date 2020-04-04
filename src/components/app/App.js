import React, {Component} from 'react';

//import Contacts from '../contacts/Contacts';
//import './App.css';

class App extends Component {

    state = {
      contacts : [{
        firstName: "Барней",
        lastName: "Стинсовский",
        phone: "+380956319521",
        gender: "male"
    }, {
        firstName: "Робин",
        lastName: "Щербатская",
        phone: "+380931460123",
        gender: "female"
    }, {
        firstName: "Аномный",
        lastName: "Анонимус",
        phone: "+380666666666"
    }, {
        firstName: "Лилия",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female"
    }, {
        firstName: "Маршэн",
        lastName: "Эриксонян",
        phone: "+380739432123",
        gender: "male"
    }, {
        firstName: "Теодор",
        lastName: "Мотсбэс",
        phone: "+380956319521",
        gender: "male"
      }]
    };
 
  
  render() {
    return (
      <div> 
        <ul> 
        {this.state.contacts.map((item) => {
          const {firstName, lastName, phone, gender} = item;
          console.log(item)
          return (
            <li>
              {firstName} 
            </li>
          )
        })}
        </ul> 
      </div>
    )
  }
}
export default App;


