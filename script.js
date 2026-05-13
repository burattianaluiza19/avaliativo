async function sasa() {
    const destino = document.getElementById('destino');
    if (!destino) return;

    try{
        const response = await fetch('dados.json');

        if (!response.ok) {
            throw new Error('falha ao carregar dados');
            
        }
        const pessoas  = await response.json();

        destino.innerHTML = '';
        
    }

}








