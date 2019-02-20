const jwt = require('jsonwebtoken');

//  ===============
//  Verificar token
//  ===============

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

};

//  ===============
//  Verificar adminRole
//  ===============

let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        res.json({
            ok: false,
            err: {
                message: 'El usuario no es un administrador'
            }
        });
    }

    /*Mi respuesta
    if( usuario.role != "ADMIN_ROLE" ){
        res.json({
            ok:false,
            err:{
                message:'El usuario no es un administrador'
            }
        });
        next();
    }*/
}

module.exports = {
    verificaToken,
    verificaAdmin_Role
}