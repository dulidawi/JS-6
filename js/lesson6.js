let number = 0;
while (number <= 10) {
    console.log(number);
    number += 1
}

for (let i = 2; i <= 20; i += 1) {
    if (i % 2 !== 0) {
        continue
    }
    console.log(i);
}

for (let table = 0; table <= 10; table += 1) {
    console.log(`7 x ${table} =  ${7 * table}`);
}

for (let numberr = 0; numberr <= 20; numberr += 1) {
    if (numberr >= 13) {
        break;
    }
    console.log(numberr);
}

let list = 0;
while (list < 20) {
    list += 1;
    if (list % 3 === 0) {
        continue
    }   
    console.log(list); 
}




