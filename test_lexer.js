setTimeout(function () {

    // run automated testing
    let caseList = returnCaseList();
    console.log("Automated testing has " + caseList.length + ' cases, now is running ...');
    for (let i = 0; i <= caseList.length - 1; ++i) {
        let outputs = caseList[i].output;
        lexer.start(caseList[i].input);

        let failed = false;
        let tokens = lexer.DFA.result.tokens;
        if (!isNaN(outputs)) {
            failed = outputs !== tokens.length;
        } else {
            for (let j = 0; j <= tokens.length - 1; ++j) {
                if (typeof outputs[j] === 'undefined' || outputs[j].type !== tokens[j].type || outputs[j].value !== tokens[j].value) {
                    failed = true;
                }
            }
        }

        if (failed) {
            alert('Automated testing is failed');
            console.error('Case ' + (i + 1) + ': failed | ' + 'input = ' + caseList[i].input);
        } else {
            console.info("\x1B[32m" + 'Case ' + (i + 1) + ': success | ' + 'input = ' + caseList[i].input + "\x1B[0m");
        }
    }
    console.log('Automated testing is Done');
}, 100)