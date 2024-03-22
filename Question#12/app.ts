// Q12:Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// make a Array

let names : string[] = ['Shabana','Ghazala','Noreen','Amber'];

// creat a massage

let message1 : string = " You are invited a dinner at Pearl Continantal Hotel tomorrow.";

// print message with the each person's name

for (let i = 0; i < names.length; i++){
  console.log(names[i] + message1);
}