module("APP" );

test("click em gerar", function() {
    $('.js_gerar').click();
    ok($('.js_ancora_filhos').length);
});

test("click em obter", function() {
    $('.js_obter').click();
    ok($('#obtido').val().length);
});

