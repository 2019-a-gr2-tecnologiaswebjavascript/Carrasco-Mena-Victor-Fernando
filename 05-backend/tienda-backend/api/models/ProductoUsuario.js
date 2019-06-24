/**
 * ProductoUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad:{
      type:'number',
      min: 1
    },// Configuracion del hijo
    fkUsuario:{// nombre del campo fk
      model:'usuario',// modelo a realacionarse (PAPA)
      required: true // OPCIONAL!!
    },
    fkProducto:{
      model:'producto',
      required:true
    }
  },

};

// Usuario 