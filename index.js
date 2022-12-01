// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

let findMatching = (ace,block) => ace.filter(ace => ace.toLowerCase() === block.toLowerCase())

let fuzzyMatch = (ace,block) => ace.filter(ace => ace.charAt(0) === block.charAt(0))

let matchName = (ace,block) => ace.filter(ace => ace.name === block)












