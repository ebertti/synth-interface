//===============================================================================================================
// Arquivo..........: tests/ambiente.js
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 15/02/2014
//
// Testes para garantir que o ambiente está configurado
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  15/02/2014  EB  Criação dos testes.
//===============================================================================================================

module("AMBIENTE" );

test("se namespace estão carregados", function() {
    ok( Synth instanceof Object );
    ok( Synth.Abstract instanceof Object );
    ok( Synth.Abstract.Model instanceof Object );
    ok( Synth.Abstract.Model.Item instanceof Object );
    ok( Synth.Abstract.Model.Documento instanceof Object );
    ok( Synth.Abstract.Collection.Itens instanceof Object );
    ok( Synth.Abstract.View.Item instanceof Object );
    ok( Synth.Abstract.App instanceof Object );
    ok( synth instanceof Object);
});

test("se instancias globais são do tipo esperado", function() {
    ok(synth.app instanceof Synth.Abstract.App);
    ok(synth instanceof Synth.Route);
    ok(synth.app.model instanceof Synth.Abstract.Model.Documento);
});

test("se elemento estão presentes no DOM", function(){
    ok($('.js_app').length);
    ok($('.js_before_app').length);
});

