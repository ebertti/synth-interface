//===============================================================================================================
// Arquivo..........: tests/app.js
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 15/01/2014
//
// Testes de comportamento da aplicação
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  25/01/2014  EB  Criação dos testes.
//===============================================================================================================

module("APP" );

test("click em gerar", function() {
    $('.js_gerar').click();
    ok($('.js_ancora_filhos').length);
});

test("click em obter", function() {
    $('.js_obter').click();
    ok($('#obtido').val().length);
});

