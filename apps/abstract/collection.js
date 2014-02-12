Synth.Abstract.Collection.Itens = Backbone.Collection.extend({
    model: Synth.Abstract.Model.Item,
    comparator: 'ordem',
    parse:function(data){
        var ordem = 0;
        _.each(data, function(item){
            item.ordem = ordem;
            ordem++;
        });
        return data;
    }

});