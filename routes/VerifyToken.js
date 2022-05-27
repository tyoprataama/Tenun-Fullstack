const jwt = require('jsonwebtoken');

const verifyToken = (request, response, next) => {
  const authHeader = request.headers.token;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    //  Add the return to prevent ERR_HTTP_HEADERS_SENT error
    return jwt.verify(token, process.env.JWT_TOKEN, (error, user) => {
      if (error) response.status(403).json('Token is not valid');
      request.user = user;
      next();
    });
  }
  return response.status(401).json('You\'re not authenticated');
};

const verifyTokenAuth = (request, response, next) => {
  verifyToken(request, response, () => {
    if (request.user.id === request.params.id || request.user.isAdmin) {
      next();
    } else {
      response.status(403).json('You\'re not allowed');
    }
  });
};

const verifyTokenAdmin = (request, response, next) => {
  verifyToken(request, response, () => {
    if (request.user.isAdmin) {
      next();
    } else {
      response.status(403).json('You\'re not allowed');
    }
  });
};

module.exports = { verifyToken, verifyTokenAuth, verifyTokenAdmin };
