// Q14:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// make a list of guest:
let guest : string[] = ['Hina', 'Nazia','Shazia']

// creat a loop

for (let i = 0 ; i < 3 ; i++ ){

// print an invitation message to all guest 

    console.log(`Hi ${guest[i]},\n\n I would like to invite you a dinner at my home tommorow.\n\n Thank You`);
}