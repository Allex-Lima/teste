function cumprimentar() {
    return 'Oi gente';
}

function cumprimentaPessoa(pessoa) {
    return (`${cumprimentar()}, meu nome é ${pessoa}`);
}

let x = cumprimentaPessoa();

console.log(x)