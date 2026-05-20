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

        pessoas.forEach(item => {
            const linha = document.createElement('tr');

            //convrt objeto para string no onclick 
            const itemString = JSON.stringify(item).replaceAll('"', '&quot;');

            linha.innerHTML = ` 
                <td>${item.nome}</td>
                <td>${item.iade}</td>
                <td>${item.ano}</td>
                <td>${item.habiliade}</td>
                <td>
                   <button type= "button" onclick= "claros (${itemString})">Slecionar</button>
                   <type ="button" onclick="thi.colset('tr').remove()">Fds</button>
                </td>
                `;

                 destino.appendChild(linha);
        });

      } catch (error) {  
        console.error("Error ao buscar dados:", error);

         } 
    { 

    function blex(){ 
        const destino = document.getElementById('destino');
        destino.innerHTML = '';

    }

    function claros(objetopesoa) {
    //captura os inputs do HTML pelos 
    document.getElementById('nome').value = objetopessoa.nome;
    document.getElementById('idade').value = objetopessoa.idade;
    document.getElementById('ano').value = objetopessoa.ano;
    document.getElementById('hablidade').value = objetopessoa.habiliade;

    }

                





}








