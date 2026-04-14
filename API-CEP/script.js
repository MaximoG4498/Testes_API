

async function cepsearch() {
    const cep = document.getElementById('cep').value
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("CEP não foi encontrado!") // trata o erro avisando que não achou o CEP
        }
        const data = await response.json()

        // Preenchendo os campos HTML
        document.getElementById('rua').value = data. street || '' // pega um elemento pelo id
        document.getElementById('bairro').value = data. neighborhood || ''
        document.getElementById('cidade').value = data. city || ''
        document.getElementById('estado').value = data. state || ''
    } catch (error) {
        alert(error.message) // gera um alerta com uma mensagem e o erro
    }

}