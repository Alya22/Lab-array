var arr = [];
for ( i = 0; i < 10; i++ ) {
    arr.push( Math.round( Math.random() * 100 ));

} console.log(arr);
arr.forEach(el => {
    console.log(el)
});