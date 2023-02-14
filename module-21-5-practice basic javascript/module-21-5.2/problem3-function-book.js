// 3. book calculation
// pageRequirement()
// input parameter given book number of three books

// book1 has 100 page
// book2 has 200 page
// book3 has 300 page


function pagerequirement(book1, book2, book3) {
     let firstBook = book1 * 100;
     let seceondBook = book2 * 200;
     let thirdBook = book3 * 300;
     totalPage = firstBook + seceondBook + thirdBook;
     return totalPage;
}
const libery1 = pagerequirement(10, 10, 10);
console.log(libery1);