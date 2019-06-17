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

// protocolo http
// restful web services

// protocolo + ip + puerto + segmentoUrl + modelo

// http://192.168.10.110:1337/api/Usuario

// http://localhost:1337/Usuario

// 1) CREAR DATO

// POST
// http://localhost:1337/Usuario
// Body Params


// 2) BUSCAR TODOS LOS DATOS

// GET
// http://localhost:1337/Usuario
// Body Params
// RESPUESTA -> Todos los registros (Limit = 30)

// 3) BUSCAR AL USUARIO POR IDENTIFICADOR

// GET
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12
// Body Params

// 4) ACTUALIZAR USUARIO POR ID

// FETCH / PUT
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12
// Body Params

// RESPUESTA -> EL USUARIO ACTUALIZADO

// 5) BORRAR USUARIO POR ID

// DELETE
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/12

// RESPUESTA -> EL USUARIO BORRADO


// localhost:1337 - Delta
// localhost:1337 - Angular
// localhost:1337 - Backend

// localhost:4200 - Gamma
// localhost:4200 - Angular

// Delta -> quiero llamar -> Gamma
// BLOQUEADO!
// NAVEGADOR
// 
