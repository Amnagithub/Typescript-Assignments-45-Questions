// Q13:Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// make an Array of transportation

let cars :string[] = ['Honda Civic','Suzuki Mehran','Suzuki Swift'];

// creat a loop of your list

for (let i = 0 ; i < cars.length; i++) 

// print your list with the statment
{
  console.log(`"I would like to own a ${cars[i]}."`);
}