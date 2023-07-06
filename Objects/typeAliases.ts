// Better way to define objects

type Employee = {
    readonly id: number,
    name: string,                   // We can use this object multiple times.
    retire: (date: Date) => void   

}

let employee: {
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) =>  {
        console.log(date);
    }
};
