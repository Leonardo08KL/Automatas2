if (lang === 'c') {
    $('.lang-choose-c').addClass('lang-choose-select');
    $('.AllTokenListDefault').fadeIn();
} else if (lang === 'sql') {
    $('.lang-choose-sql').addClass('lang-choose-select');
    $('.AllTokenListDefault').fadeIn();
} else if (lang === 'goal') {
    $('.lang-choose-goal').addClass('lang-choose-select');
    $('.AllTokenListGoal').fadeIn();
}
// Generate default codes in different languages
let defaultInput = "";
if (lang === 'c') {
    defaultInput = "";
} else if (lang === 'goal') {
    defaultInput = "(al)G(al)()()G()()()G()(al)"
} else {
    defaultInput = "select * from test where id >= 10 and id <10 and name='test';"
}

// choose editor type
let CODEAREA_TYPE_TEXTAREA = 'textarea';
let CODEAREA_TYPE_EDITOR = 'editor';
let codearea = getUrlParam('codearea');
if (codearea !== CODEAREA_TYPE_TEXTAREA && codearea !== CODEAREA_TYPE_EDITOR) {
    codearea = CODEAREA_TYPE_TEXTAREA;
}
if (codearea === CODEAREA_TYPE_TEXTAREA) {
    $('#ButtonCodearea').text('Syntax / ON');
} else {
    $('#ButtonCodearea').text('Syntax / OFF');
}
if (codearea === 'editor') {
    window.editor = CodeMirror.fromTextArea(document.getElementById('Textarea'), {
        mode: mode,
        theme: "monokai",
        indentUnit: 4,
        lineWrapping: true,
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        matchBrackets: true,
        autofocus: true,
    });
    editor.on('change', function () {
        startParseInput();
    });
    editor.on('blur', function () {
        startParseInput();
    });

    // complete the textarea.
    editor.setValue(defaultInput);
    startParseInput();
} else {
    $('#Textarea').on('input', function () {
        $('#TokenList').html('<p style="color: #888;">Lexer is working... ...</p>');
        startParseInput();
    });
    $('#Textarea').blur(function () {
        startParseInput();
    });

    // complete the textarea.
    $('#Textarea').val(defaultInput);
    startParseInput();
}