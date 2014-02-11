Synth.Abstract.Model.Documento = Backbone.Model.extend({
    initialize: function(){
        this.set('gerado', '{name: "main_page", widget_type: "AbstractInterface",\n' +
' children:[\n' +
'    {name: "header", widget_type: "CompositeInterfaceElement",\n' +
'      children:[\n' +
'        {name: "logo", widget_type: "SimpleActivator"},\n' +
'        {name: "title", widget_type: "ElementExhibitor"}\n' +
'      ]\n' +
'    },\n' +
'    {name: "items", widget_type: "CompositeInterfaceElement",\n' +
'      repeatable: true, children:[\n' +
'        {name: "link", widget_type: "SimpleActivator"},\n' +
'        {name: "description", widget_type: "ElementExhibitor"}\n' +
'      ]\n' +
'    }\n' +
'  ]\n' +
'}')
    }
});

Synth.Abstract.Model.Item = Backbone.Model.extend({

    parse: function(data){
        data.children = new Synth.Abstract.Collection.Itens(data.children || [], {parse:true});
        return data;
    }

});