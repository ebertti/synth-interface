module("ARVORE");

test("click em adicionar elemento na arvore", function() {
    var qtd = $('.js_ancora_filhos').length;
    $('.js_adicionar_filhos')[0].click();
    ok($('.js_ancora_filhos').length > qtd);
});

test("click em obter", function() {
    $('.js_obter').click();
    ok($('#obtido').val().length);
});

