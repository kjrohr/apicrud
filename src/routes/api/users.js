const user = require('../../models/user');
module.exports = (express) => {
  const router = express.Router();

  // Read All
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read One
  router.get('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete
  router.delete('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/users/:id', (req, res) => {
    // URL id will override any preexisting id
    req.body.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create User
  router.post('/users', (req, res) => {
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
