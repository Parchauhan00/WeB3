const a1 =2;
const b1 =3;

// Nested Function
function addSquares(a,b) {
    const sa = square(a);
    const sb = square(b);
    return sa + sb;
    function square(x) {
        return x * x;
    }
    return sa + sb;
}

console.log(addSquares(a1,b1));
