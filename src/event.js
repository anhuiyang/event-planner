'use strict';
class Event{
    constructor(dateTime, description){
        if(dateTime == "" || description == ""){
            throw new Error('Incorrect input')
        }else{
            this.description = description;
            this.jsDateTime = new Date(dateTime)
        }
    }
    stringFormat(){
        let li = document.createElement('li');
        li.innerText = this.jsDateTime + " || " + this.description;
        return li
    }
}