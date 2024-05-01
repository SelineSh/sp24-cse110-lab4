1. 3, since prices = [100, 200, 300], so prices.length = 3.
2. 150, because 300 * (1-0.5) = 150
3. 150, because Math.round(150 * 100) / 100 = 150
4. [ 50, 100, 150 ], because 100*(1-0.5), 200*(1-0.5), 300 * (1-0.5) = 150.
5. An error, bcause “i” uses let and defines it in the for loop, and console.log(i) is not inside the for loop. So console.log(i) can't get what's defined.
6. An error, bcause “discountedPtice” uses let and defines it in the for loop, and console.log(discountedPtice) is not inside the for loop. So console.log(discountedPtice) can't get what's defined.
7. 150, because let finalPrice was set outside the for loop and changed to 150 in the third time for loop on line 8.
8. [ 50, 100, 150 ], because 100*(1-0.5), 200*(1-0.5), 300 * (1-0.5) = 150.
9.  An error, bcause “i” uses const and defines it in the for loop, and console.log(i) is not inside the for loop. So console.log(i) can't get what's defined.
10. 3, Since the length is set outside the for loop and the price = [100, 200, 300], the price.length = 3 = length.
11. [ 50, 100, 150 ], because 100*(1-0.5), 200*(1-0.5), 300 * (1-0.5) = 150.
12. A: console.log(student.name);
    B: console.log(student["Grad Year"]);
    C: student.greeting();
    D: console.log(student["Favorite Teacher"].name);
    E: console.log(student.courseLoad[0]);
13. A: "32" because '3' is a string and + 2 is the same as setting 2 to a string and adding it to 3.
    B: "1", Since '3' as a string can't be subtracted from 2, "3" becomes a number and is subtracted from 2.

    C:"3", since null map to 0.

    D:"3null", since '3' is a string, null is also considered to be a string and is added to the end of '3'.

    E:"4", since true map to 1.

    F:"0", since false and null are map to 0.

    G:"3undefined", since '3' is a string, undefined is also considered to be a string and is added to the end of '3'.

    H:NaN, since '- undefined' so undefined can't be a string and undefined in javascript is NaN, so when we '- undedfined' is equal to "3 - NaN" and get NaN.

14. A:"true", because 1 is number  so '2' is became number, and 2 is greater than 1.
    
    B:"false", because '2' is greater than '1'.

    C:"true", because string '2' becomes a number 1, and 2 == 2.

    D:"false", because string '2' and number 2 is different types.

    E:"false", beacuse true is equal to 1.

    F:"true", beacuse it isn't 0, null, underfined, NaN,"". So it will retrun true.
15. "==" can change the string to the number and check. But "===" only can check two was same type.
16. part2-question16.js
17. [ 2, 4, 6 ], because we give the arry[1,2,3], and the callback is function doSomething. In the doSomething we time the number 2. therefore we get [2,4,6].
18. part2-question18.js
19. 1
    
    4

    3

    2