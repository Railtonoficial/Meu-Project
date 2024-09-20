function countAInString(s) {
    let count = 0;
    for (let char of s.toLowerCase()) {
        if (char === 'a') {
            count++;
        }
    }
    return count;
}

let string = "Abracadabra"; 
let count = countAInString(string);
console.log(`A letra 'a' aparece ${count} vezes na string.`);
