let h2 = document.querySelector("h2");
if (h2) {
    console.dir(h2.innerText);
    // concatenate safely
    h2.innerText = h2.innerText + " From Prashant Chauhan";
} else {
    console.warn('No <h2> found in the document');
}

// Select elements with class "box" (use .box). Using "box" would look for a <box> tag.
let divs = document.querySelectorAll(".box");
let idx = 1;
for (let div of divs) {
    // use template literal (backticks) to interpolate the index
    div.innerText = `new unique value ${idx}`;
    idx++;
}

// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
// divs[0].innerText = "new unique value 1";

