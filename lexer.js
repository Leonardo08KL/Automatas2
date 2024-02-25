// According to the currently selected language, dynamically load different JS extension files and CSS files, and dynamically process the display logic
let lang = getUrlParam('lang');
let mode = "text/plain";
if (lang === 'c') {
    mode = "text/x-csrc";
    document.write('<script src="./package/c-lexer.min.js"><\/script>');
    document.write('<script src="./test/auto/c-lexer_test.js"><\/script>');
} else if (lang === 'sql') {
    mode = "text/x-sql";
    $('.lang-choose-sql').addClass('lang-choose-select');
    document.write('<script src="./package/sql-lexer.min.js"><\/script>');
    document.write('<script src="./test/auto/sql-lexer_test.js"><\/script>');
} else if (lang === 'goal') {
    $('.lang-choose-goal').addClass('lang-choose-select');
    document.write('<script src="./package/goal-lexer.min.js"><\/script>');
    document.write('<script src="./test/auto/goal-lexer_test.js"><\/script>');
} else {
    window.location.href = window.location.pathname + '?lang=c';
}

// Start parse your input
let ignoreWhiteSpace = true;
let compressLineFeed = true;

function startParseInput() {
    let stream = codearea === 'editor' ? editor.getValue() : $('#Textarea').val();
    let config = {
        ignoreTokens: [],
        ignoreValues: [" "],
        compressLineFeed: true,
    };

    var columnaActual = 1;
    var lineaActual = 1;
    var idCont = 1;

    if (!ignoreWhiteSpace) {
        config.ignoreValues = [];
    }
    if (!compressLineFeed) {
        config.compressLineFeed = false;
    }
    lexer.setConfig(config);
    lexer.start(stream);
    console.log(lexer);

    // Limpia la tabla antes de agregar nuevos resultados
    $('#analizar_lexico').html('<tr><th>ID</th><th>LEXEMA</th><th>TOKEN</th><th>LÍNEA</th><th>COLUMNA</th></tr>');

    lexer.DFA.result.tokens.forEach((token) => {
        let type = token.type;
        let value = token.value;
        let content = value;
        let classToken = 'token-' + type;

        if (value === '\n') {
            // Si es un salto de línea, aumenta la línea y reinicia la columna
            columnaActual = 1;
            lineaActual++;
            return; // Saltar al siguiente token
        }

        // Agrega una fila a la tabla con los datos del token
        $('#analizar_lexico').append('<tr><td>' + idCont + '</td><td>' + content + '</td><td>' + type + '</td><td>' + lineaActual + '</td><td>' + columnaActual + '</td></tr>');

        // Incrementar la columna según el tamaño de content
        columnaActual += content.length;
        idCont++;
    });
}
