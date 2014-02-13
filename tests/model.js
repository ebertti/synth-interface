module('MODEL');

test("valores padrões", function(){
    var model = new Synth.Abstract.Model.Item();
    equal(model.get('widget_type'), 'ElementExhibitor');
    ok(model.get('children') instanceof Synth.Abstract.Collection.Itens);
});

test('removendo parametro repeatable se ele for false', function(){
    var model = new Synth.Abstract.Model.Item();
    model.set("repeatable", true);
    ok(model.get("repeatable") === true);
    model.set("repeatable", false);
    ok(model.get("repeatable") === undefined);
});

test("somente 'CompositeInterfaceElement', 'AbstractInterface' podem ter filhos", function(){
    var model = new Synth.Abstract.Model.Item();
    ok(model.pode_ter_filhos() == false, "ElementExhibitor");

    model.set('widget_type', 'CompositeInterfaceElement');
    ok(model.pode_ter_filhos() == true, "CompositeInterfaceElement");

    model.set('widget_type', 'SimpleActivator');
    ok(model.pode_ter_filhos() == false, "SimpleActivator");

    model.set('widget_type', 'AbstractInterface');
    ok(model.pode_ter_filhos() == true, "AbstractInterface");

});

test("retorno do toJson do model nao pode ter ordem e nao pode ter children se o widget_type nao pode ter filhos", function(){
    var model = new Synth.Abstract.Model.Item();
    model.set('name', 'asd');
    var test = {name: 'asd',  widget_type: "ElementExhibitor"};
    deepEqual(model.toJson(), test);
});

test("retorno do toJson do model tem que ter children se e permitido", function(){
    var model = new Synth.Abstract.Model.Item();
    model.set('name', 'asd');
    model.set('widget_type', "CompositeInterfaceElement");
    var test = {name: 'asd',  widget_type: "CompositeInterfaceElement", children:[]};
    deepEqual(model.toJson(), test);
});

test("retorno do toJson do model tem que ter children se e permitido e com filhos", function(){
    var model = new Synth.Abstract.Model.Item();
    var model2 = new Synth.Abstract.Model.Item();
    model.set('name', 'asd');
    model.set('widget_type', "CompositeInterfaceElement");
    model2.set('name', 'asd2');
    model.get('children').add(model2);
    var test = {name: 'asd',  widget_type: "CompositeInterfaceElement", children:[
        {name: 'asd2',  widget_type: "ElementExhibitor"}
    ]};
    deepEqual(model.toJson(), test);
});

test("retorno do toJson do model tem que ter children se e permitido e com filhos, mas tipo e alterado e n pode ter mais filhos", function(){
    var model = new Synth.Abstract.Model.Item();
    var model2 = new Synth.Abstract.Model.Item();
    model.set('name', 'asd');
    model.set('widget_type', "CompositeInterfaceElement");
    model2.set('name', 'asd2');
    model.get('children').add(model2);
    var test = {name: 'asd',  widget_type: "CompositeInterfaceElement", children:[
        {name: 'asd2',  widget_type: "ElementExhibitor"}
    ]};
    deepEqual(model.toJson(), test);

    model.set('widget_type', "ElementExhibitor");
    var test2 = {name: 'asd',  widget_type: "ElementExhibitor"};
    deepEqual(model.toJson(), test2);
});