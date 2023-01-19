const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
  // capturando o Token JWT do request.header
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token não imformado", 401);
  }

  const [_, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret);
    
    request.user = {
      id: Number(user_id),
    }

    return next();
  } catch {
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;