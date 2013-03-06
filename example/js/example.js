$(function() {
    $('#log-success-template').click(function () {

        $.ajax({
            url: 'templates/success.html',
            dataType: 'html',
            success: function(html) {
                var placeholder = {
                    'time' : new Date().toISOString(),
                    'msg' : 'Success message (HTML)'
                };
                $('#console').append(new STEjs(html).render(placeholder));
           }
        });
    });

    $('#log-err-template').click(function () {
        $.ajax({
            url: 'templates/error.html',
            dataType: 'html',
            success: function(html) {
                var placeholder = {
                    'time' : new Date().toISOString(),
                    'msg' : 'Error message (HTML)'
                };
                $('#console').append(new STEjs(html).render(placeholder));
           }
        });
    });

    $('#log-success-js').click(function () {
        var placeholder = {
            'time' : new Date().toISOString(),
            'msg' : 'Success message (JavaScript)'
        };

        $('#console').append(HTML.success.render(placeholder));
    });

    $('#log-err-js').click(function () {
        var placeholder = {
            'time' : new Date().toISOString(),
            'msg' : 'Error message (JavaScript)'
        };

        $('#console').append(HTML.error.render(placeholder));
    });
});

