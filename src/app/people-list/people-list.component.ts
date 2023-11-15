import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {

  public id!: Number;
  public name!: String;
  public username!: String;
  public phone!: Number;


  peopleList: Array<{ id: Number, name: String, username: String, phone: Number }> = [];

// add new row in table
  addNewPerson() {
    this.peopleList.push({
      id: this.peopleList.length + 1,
      name: this.name,
      username: this.username,
      phone: this.phone
    });


    // To clear input
    this.name = null!;
    this.username = null!;
    this.phone = null!

  }


// delete a row from table
  deletePersonData(id: Number) {
    for (let i = 0; i < this.peopleList.length; ++i) {
      if (this.peopleList[i].id === id) {
        this.peopleList.splice(i, 1);
      }
    }

  }


// edit a row in table
  editPersonData(id: Number) {

  }



}
