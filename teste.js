document.addEventListener('DOMContentLoaded', function() {
    var numeroAleatorio;
    
    // Verifica se o cookie já existe
    var cookieNumeroAleatorio = getCookie('numeroAleatorio');
    
    if (cookieNumeroAleatorio) {
        numeroAleatorio = parseFloat(cookieNumeroAleatorio);
    } else {
        numeroAleatorio = Math.random() * (6.741 - 3.754) + 3.754;
        
        // Salva o número gerado em um cookie que expira em 365 dias
        setCookie('numeroAleatorio', numeroAleatorio, 365);
    }

    var textoDepois = ' GB';
    var resultadoFinal = numeroAleatorio.toFixed(3) + textoDepois;
    
    // Exibe o resultado nos dois lugares diferentes
    document.getElementById('resultado1').textContent = resultadoFinal;
    document.getElementById('resultado2').textContent = resultadoFinal;
});

// Função para definir um cookie
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

// Função para obter um cookie
function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}