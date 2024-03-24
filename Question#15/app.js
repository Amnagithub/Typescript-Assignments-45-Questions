// Q:15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// old guest list
var guest1 = ['Hina', 'Nazia', 'Shazia'];
// print a statment the guest who is not coming
var Statement = ("Due to some personal reason ".concat(guest1[1], " is not able to join us.\n"));
// modifying the guest list and replacing the name of a guest. 
guest1[1] = "jamila";
// creat a loop 
for (var i = 0; i < 3; ++i) 
// print a second set of invitation
{
    console.log("Hi ".concat(guest1[i], ",\n\n I would like to invite you a dinner at my home tommorow.\n ").concat(Statement, " \n Thank you"));
}
