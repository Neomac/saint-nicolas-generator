import React, { useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export class People {
  constructor(name) {
    this.name = name;
    this.relations = [];
  }
}

export class Group {
  constructor(people1, people2) {
    //Register relations
    people1.relations.push(people2);
    people2.relations.push(people1);

    //Set people's group
    this.people1 = people1;
    this.people2 = people2;
  }
}

export class Round {
  constructor(group1, group2, group3) {
    this.group1 = group1;

    this.group2 = group2;

    this.group3 = group3;
  }
}

const peopleArray = [];

function initialisation() {
  peopleArray.push(new People("Antoine"));
  peopleArray.push(new People("Pauline"));
  peopleArray.push(new People("Colombe"));
  peopleArray.push(new People("Philippe"));
  peopleArray.push(new People("Léo"));
  peopleArray.push(new People("Arthur"));

  return peopleArray;
}

function getRound1 () {
  let peopleArray = initialisation();

  let peopleNameArray = []

  let groupArray = [];

  for (let indexPeopleNameArray = 0; indexPeopleNameArray < peopleArray.length; indexPeopleNameArray++) {
    if (peopleNameArray.length > 1) {
      let group = new Group(new People(peopleNameArray[0]), new People(peopleNameArray[1]))  
    
      groupArray.push(group);
  
      peopleNameArray = [];

      peopleNameArray.push(peopleArray[indexPeopleNameArray].name);

      console.log(peopleNameArray);
    } else {
      peopleNameArray.push(peopleArray[indexPeopleNameArray].name);
    }

    if (indexPeopleNameArray == peopleArray.length-1) {
      let group = new Group(new People(peopleNameArray[0]), new People(peopleNameArray[1]))  
    
      groupArray.push(group);
    }
  }
 

  console.log(groupArray)
  return new Round(groupArray[0], groupArray[1], groupArray[2]);
}

ReactDOM.render(
  <h1>{getRound1().group1.people2.name}</h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
