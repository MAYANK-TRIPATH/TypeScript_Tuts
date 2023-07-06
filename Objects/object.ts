// As we know objects in JS is dynamic, it can be changed later.

let employee = { id: 1};
employee.name = "ABC";    // this is allowed in JS but not in TS.



// For TS we write
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void   
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) =>  {
        console.log(date);
    }
};
