//===============================================================================================================
// Arquivo..........: tests/arvore.js
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 25/01/2014
//
// Testes de comportamento da arvore
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  25/01/2014  EB  Criação dos testes.
//===============================================================================================================

module("ARVORE");

test("click em adicionar elemento na arvore", function() {
    $('.js_gerar').click();
    var qtd = $('.list-unstyled').length;
    $('.js_adicionar_filhos:first').click();
    ok($('.list-unstyled').length > qtd);
});

test("remover elemento da arvore", function() {
    $('.js_gerar').click();
    var qtd = $('.list-unstyled').length;
    $('.js_remover:last').click();
    ok($('.list-unstyled').length < qtd);
});

test("arvore esta ordenavel com mouse", function(){
     $('.js_gerar').click();
     ok($('.ui-sortable').length > 0)
});

