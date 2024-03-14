"use strict";
// NAME CASES
let personName = "khawaj asghar ali.";
// we are taking here first all name charectors in lowercase//
console.log(personName.toLowerCase());
// we are taking here 2nd all name charectors in uppercase//
console.log(personName.toUpperCase());
// we are taking  here  name charectors in titlecase means that every first alphbet will be capital as title is//
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));
// alhamdulillah question # 3 i have solved yet but i have to drilling on it.//
