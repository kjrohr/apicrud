module.exports = (express) =>{
  const router = express.Router();

  router.post('/hello', (req,res) => {
    console.log('route was hit: ', req.body);
    res.json({healthy: 'true'});
  });

  return router;
};
