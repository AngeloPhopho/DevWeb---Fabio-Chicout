var lampada = {
    
    ligada: false,
    elemento: document.getElementById('myimage'),
    acender: function() {
        this.elemento.src = "lampada-on.gif";
        this.ligada = true;
    },
    
    apagar: function() {
        this.elemento.src = "lampada-off.gif";
        this.ligada = false;
    }
};

lampada.elemento.onmousemove=function() {
    if (lampada.ligada) {
        lampada.apagar();
    } else {
        lampada.acender();
    }
};
/*
JavaScript é um dos três idiomas que todos os desenvolvedores da Web 
devem aprender:
1. HTML para definir o conteúdo das páginas da web
2. CSS para especificar o layout das páginas da web
3. JavaScript para programar o comportamento das páginas da web
*/