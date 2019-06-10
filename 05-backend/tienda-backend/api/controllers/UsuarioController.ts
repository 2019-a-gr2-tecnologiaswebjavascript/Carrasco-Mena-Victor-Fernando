/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  attributes:{
      nombre:{
          type:'string'
      },
      apellido:{
          type:'string',
          required: true
      }
  }

};

