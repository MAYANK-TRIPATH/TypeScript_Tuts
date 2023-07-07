// Ts is very strict in  using null operator

function greet( name: string | null | undefined) {
    if (name)
    console.log(name.toUpperCase());
    else
    console.log("Hola!");
}


greet(undefined);