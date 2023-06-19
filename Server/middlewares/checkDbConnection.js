module.exports = (db) => {
    return (req, res, next) => {
      if (!db) {
        res.status(503).json({ message: 'Server is starting up. Please try again later.' });
      } else {
        next();
      }
    };
  };
  