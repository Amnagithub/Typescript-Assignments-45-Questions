// Q6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// store a person name with white space :
var person_name = ("\t\n   Albert Einstein   \t\n");
// print the person name with white space :
console.log("person name with wite space :", person_name);
// print the name without spaces :
console.log("Stripping the wite spaces :", person_name.trim());
