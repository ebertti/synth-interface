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

     defaults: {
        "widget_type":  "ElementExhibitor"
     },

    parse: function(data){
        data.children = new Synth.Abstract.Collection.Itens(data.children || [], {parse:true});
        return data;
    },

    initialize: function(){
        if(!this.get('children')){
            this.set('children', new Synth.Abstract.Collection.Itens());
        }
        this.on("change:repeatable", this.repeatable_change, this)
    },

    repeatable_change: function(){
        if(!this.get("repeatable")){
            this.unset("repeatable", {silent:true})
        }
    },

    pode_ter_filhos: function(){
        return _.indexOf(['CompositeInterfaceElement', 'AbstractInterface'], this.get('widget_type')) > -1
    },

    toJson: function(){
        var original = _.omit(_.clone(this.attributes), "children", "ordem");
        if(this.pode_ter_filhos() > 0){
            var filhos = [];
            this.get("children").each(function(model){
                filhos.push(model.toJson());
            });
            original.children = filhos;
        }

        return original
    }

});