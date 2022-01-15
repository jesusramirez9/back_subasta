/*
    Path: /api/cliente
*/

const { Router } = require('express');
const { listar, eliminar, cantidadClientes, obtenerCalificacionVendedor, listarInhabilitados } = require('../controllers/cliente.controller');
const { validationJWT } = require('../middlewares/validation-jwt.middleware');
const router = Router();

router.get('/listar', [validationJWT], listar);
router.get('/listarInhabilitados', [validationJWT], listarInhabilitados);
router.put('/eliminar', [validationJWT], eliminar);
router.get('/cantidad', [validationJWT], cantidadClientes);
router.get('/obtenerCalificacionVendedor/:idSubasta', obtenerCalificacionVendedor);
 
module.exports = router; 