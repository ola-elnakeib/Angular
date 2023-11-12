import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  firstNameLabel = "";
  setFirstNameLabel() {
    this.firstNameLabel = "First name";
  }
  firstNameValue = "Ola";



  lastNameLabel = "Last name";
  lastNameValue = "Elnakeib";
  setLastNameValue() {
    return this.lastNameValue;
  }



  showConsole() {
    console.log("Welcome To Binding Tybes");
  }


  textData = "";

}
