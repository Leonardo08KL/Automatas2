setTimeout(function () {
    $(document).on('mouseenter', '.token', function () {
        let type = $(this).attr('tokentype');
        $(".token").addClass('opacity');
        $(".token-" + type).removeClass('opacity');
    });
    $(document).on('mouseleave', '.token', function () {
        $(".token").removeClass('opacity');
    });

    $('#ButtonCodearea').on('click', function () {
        if (codearea === CODEAREA_TYPE_TEXTAREA) {
            window.location.href = window.location.pathname + '?lang=' + lang + '&codearea=' + CODEAREA_TYPE_EDITOR;
        } else {
            window.location.href = window.location.pathname + '?lang=' + lang + '&codearea=' + CODEAREA_TYPE_TEXTAREA;
        }
    });

    $('#IgnoreWhiteSpace').on('click', function () {
        ignoreWhiteSpace = !ignoreWhiteSpace;
        if (ignoreWhiteSpace) {
            $('#IgnoreWhiteSpace').text('IgnoreWhiteSpace / ON');
        } else {
            $('#IgnoreWhiteSpace').text('IgnoreWhiteSpace / OFF');
        }
        startParseInput();
    })

    $('#CompressLineFeed').on('click', function () {
        compressLineFeed = !compressLineFeed;
        if (compressLineFeed) {
            $('#CompressLineFeed').text('CompressLineFeed / ON');
        } else {
            $('#CompressLineFeed').text('CompressLineFeed / OFF');
        }
        startParseInput();
    })
}, 100);