import React, {Component} from 'react';

export default class Contacts extends Component{

    ourContacts =  this.contatsProp.map((item)=>{
        return (
            <li>
                    this.firstName = {item.firstName}
                    this.lastName = {item.lastName}
                    this.phone = {item.phone}
                    this.gender = {item.gender}
            </li>
        )
    })   



    render(){
        return (
            <ul>
            {this.ourContacts}
        </ul>
        )

        
    }
}

