


// // react props
// // NB: using props in React components is almost identical to using arguments in plain JavaScript functions
// // e.g

// // function sum() {
// //     return a + b;
// // }

// // sum() Reference Error: a is not defined; b is not defined

// // to fix the error, we need to add a and b as parameters and pass two numbers as arguments when we call the "sum()" function
// // i.e
// function sum(a:any, b:any){
//     return a + b;
// }

// sum(2, 2);

// // HOW TO PASS DATA TO A REACT COMPONENT
// // PS: React components resemble vanilla JS functions, but unlike a JS function, it returns and renders React elements like a button
// // e.g 
// // function Button() {
// //     return <button>Click me</button>;
// // } 

// // to call a React component and have it display those elements, we use it as if it was a custom HTML element but written in JS
// // e.g
// function App() {
//     return <Button/>;
// }

// function Button() {
//     return <button>Click me</button>
// }

// // HOW TO PASS DATA TO FUNCTIONS WHEN THEY ARE CALLED
// // e.g to add a custom text to the button, add a text attribute and set its value equal to some string
