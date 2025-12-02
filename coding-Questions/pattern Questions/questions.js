//  Q : How to print below number pattern?
/* 
1
12
123
1234
12345 
*/

function printNumberPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += j;
        }

        console.log(line);
    }
}

// printNumberPattern(5);



// ----------------------------------------------------------------------
//  Q : How to print below number pattern?
/* 
1
2 3
4 5 6
7 8 9 10
 */

function printContinousTriangle(rows) {
    let num = 1;

    for (let i = 1; i <= rows; i++) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += num + " ";
            num++;
        }

        console.log(line);
    }
}

// printContinousTriangle(5);


// ----------------------------------------------------------------------
//  Q : How to print below left star triangle pattern?
/* -----
*
* *
* * *
* * * *
* * * * *
------- */

function printLeftTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += " *";
        }

        console.log(line);
    }
}

// printLeftTriangle(5);

// ----------------------------------------------------------------------
//  Q : How to print below inverted left star pattern?
/* -----
* * * * *
* * * *
* * *
* *
*
------- */

function printInvertedTrangle(rows) {
    for (let i = rows; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += " *";
        }

        console.log(line);
    }
}

// printInvertedTrangle(5);


//  Q :  How to print below center star pattern
/* 
    *
   ***
  *****
 *******
*********
 */

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {

        let line = "";

        for (let s = 1; s <= rows - i; s++) {
            line += " ";
        }

        for (let j = 1; j <= (2 * i - 1); j++) {
            line += "*";
        }

        console.log(line);
    }
}

printPyramid(5);