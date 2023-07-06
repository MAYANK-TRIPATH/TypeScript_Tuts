// In TS functions is same as JS but we need to annotate functions clearly.
//        Things o keep in Mind.
// data should not be "any" type
// for specific function/data only allowed operation happens.

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
    return income * 1.2;
    return income * 1.5;

}
calculateTax(10_000);

// let suppose we make a fun which adds 2 with a given number.

function addTwo(num) {
    return num + 2;
}                           // Basically its a JS function which works good but if :-
addTwo(5);     // we write it as =>  addTwo("5");  also works but shoudnt coz "5" is string.


// to solve this use TypeScript => we annonate function/ data.

function addTwo(num: number) {
    return num + 2;
}                           
addTwo(5);

// for arrow funtions

let loginUser = (name: string, email:string, isPaid: boolean = false) => {}
loginUser("M", "M@k.com");
