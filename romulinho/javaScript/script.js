function mostrarPagamento() {

    document.getElementById('qrcode').style.display = 'none';
    document.getElementById('cartao-form').style.display = 'none';


    var opcao = document.getElementById('opcao').value;

    if (opcao === 'pix') {
        document.getElementById('qrcode').style.display = 'block';
    }

    if (opcao === 'credito' || opcao === 'debito') {
        document.getElementById('cartao-form').style.display = 'block';
    }
}
        function mostrarPagamento() {
            var opcao = document.getElementById('opcao').value;
            document.getElementById('qrcode').style.display = 'none';
            document.getElementById('cartao-form').style.display = 'none';

            if (opcao === 'pix') {
                document.getElementById('qrcode').style.display = 'block';
            } else if (opcao === 'credito' || opcao === 'debito') {
                document.getElementById('cartao-form').style.display = 'block';
            }
        }

        function mostrarAlerta() {
            var opcao = document.getElementById('opcao').value;
            if (opcao === "") {
                alert("Por favor, selecione uma forma de pagamento.");
            } else if (opcao === 'pix') {
                alert("Pagamento via Pix Aprovado.");
            } else if (opcao === 'credito') {
                alert("Pagamento via Crédito Aprovado.");
            } else if (opcao === 'debito') {
                alert("Pagamento via Débito Aprovado.");
            }
        }