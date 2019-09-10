



var element = document.getElementById('myimage');
element.onclick = function() {
    if (element.src.match("lampada-on")) {
        element.src="lampada-off.gif";
    } else {
        element.src="lampada-on.gif";
    }
};
/*
JavaScript é um dos três idiomas que todos os desenvolvedores da Web 
devem aprender:
1. HTML para definir o conteúdo das páginas da web
2. CSS para especificar o layout das páginas da web
3. JavaScript para programar o comportamento das páginas da web
*/