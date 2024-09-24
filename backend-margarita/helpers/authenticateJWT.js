import jwt from 'jsonwebtoken';

export const authenticateJWTCtrl = (req, res, next) => {
    const token = req.cookies.token; // Accede al token desde las cookies

    if (!token) {
        return res.status(401).json({ message: 'Token no encontrado, acceso denegado.' });
    }

    // Verificar el token
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido o expirado.' });
        }
        // Si el token es válido guarda la info del usuario en req.user
        req.user = user;
        next()
    });
};
