let dinheiro = 0;

let click = 1;

function incrementar() {
    dinheiro = dinheiro + click; 
    
    let h1 = document.getElementById('contador');
    h1.innerText = dinheiro;
}

