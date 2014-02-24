//===============================================================================================================
// Arquivo..........: namespace.js
// Autor............: Bertti, E (EB)
// Ult. Atualização.: 10/01/2014
//
// Criação dos namespaces utilizados pela aplicacao
//
//
// Versão     Data     Autor  Comentários
// ==============================================================================================================
// 1.0.0.0  10/01/2014  EB  Criação dos namespaces.
//===============================================================================================================

window.Synth = {
    Abstract : {
        Model : {},  Collection: {}, View: {},  App: {}
    },
    Mapping : {
        Model : {},  Collection: {}, View: {},  App: {}
    }
};

window.synth = {
    widget_types: [
        {label: "Exibitor", value: "ElementExhibitor"},
        {label: "SimpleActivator", value: "SimpleActivator"},
        {label: "Composite", value: "CompositeInterfaceElement"},
        {label: "Abstract", value: "AbstractInterface"}
    ]
};