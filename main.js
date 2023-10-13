let i = -424
let x = "fghrirti"
let y = "ujrfijfi"
let g = 0

//Задание 1
if (i > 0){
    console.log("Число положительное");
}

else{
    console.log("Число отрицательное");
    i*=-1
    console.log(i);
}

// Задание 2

console.log("Длина строки равна "+x.length);

// Задание 3

console.log("Последний символ строки  "+x[x.length-1]);

// Задание 4

if (i%2==0){
    console.log("Число чётное");
}

else{
    console.log("Число нечётное");
}

// Задание 5

if (x[0]==y[0]){
    console.log("Первые буквы равны");
}

else{
    console.log("Первые буквы не равны");
}

// Задание 6

let u = i.toString()
console.log(Number(u[0])+Number(u[u.length-1]));

// Задание 7

for(let v = 0; v < u.length; v++){
    g+=Number(u[v])
}
console.log("Сумма всех цифр числа равна "+g);
