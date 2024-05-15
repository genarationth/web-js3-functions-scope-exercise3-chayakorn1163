//Exercise #3.1 Maria has to calculate the cost of her payments for the month. For every transation there is a $3 fee and a 0.1% (0.001) interest fee. Can you help her calculate her costs?
//Return the value of what she should be paying.


const calculate = payments => +(payments *0.001)+3;
console.log(calculate(1000));


//Exercise #3.2

const greeting = (name1, name2, name3) => `welcome ${name1}, ${name2}, ${name3}`;

console.log(greeting('Maria', 'Juan', 'Pedro'));


//โค้ดนี้เป็นการสร้างฟังก์ชันที่ชื่อ greeting โดยใช้ Arrow Function ซึ่งรับพารามิเตอร์คือ name1, name2, และ name3
//ในฟังก์ชันนี้จะมีการใช้ Template Literal โดยใช้ backticks (`) เพื่อรวมข้อความและตัวแปรพร้อมกัน
//ตัวแปร name1, name2, และ name3 จะถูกแทรกเข้าไปในข้อความผ่าน ${...} เพื่อให้เป็นข้อความที่เป็นไปตามต้องการ
//console.log(greeting('Maria', 'Juan', 'Pedro'));

//โค้ดนี้เรียกใช้ฟังก์ชัน greeting ที่ถูกสร้างขึ้นมาข้างบน โดยส่งค่าอาร์กิวเมนต์เป็น 'Maria', 'Juan', และ 'Pedro'
//ฟังก์ชัน greeting จะรับค่าเหล่านี้และแทนที่ในข้อความ Template Literal ซึ่งจะผลิตข้อความ "welcome Maria, Juan, Pedro"
//Output

//เมื่อโปรแกรมรัน คำสั่ง console.log จะแสดงผลลัพธ์ที่ได้จากการเรียกใช้ฟังก์ชัน greeting ซึ่งเป็นข้อความ "welcome Maria, Juan, Pedro" บนคอนโซล
//ดังนั้น Output ที่ได้คือ "welcome Maria, Juan, Pedro" ที่แสดงออกมาบนคอนโซลหรือ Console ของโปรแกรม JavaScript
//

const age = year => 2024 - year;

console.log(age(1999));

const greetage = (name1, age1, name2, age2, name3, age3) => `welcome ${name1}, you are ${age1}. welcome ${name2}, you are ${age2}.welcome ${name3}, you are ${age3}.`;

console.log(greetage('Maria', 30, 'Juan', 25, 'Pedro', 35));




const grede = num => {
    if (num >= 11) {
        return 'Perfect for a score  of 11';
    } else if (num >8 && num <11) {
        return 'Excellent for a scores greater than 8 and greater than';
    } else if (num >= 5 && num <8) {
        return 'you re pass';
    } else if (num >= 0 && num <5) {
        return 'failed';
    } else {
        return 'num should be a number 0-11';
    }
}

console.log(grede(11));

