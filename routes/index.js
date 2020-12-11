var express = require('express');
var router = express.Router();
const Ctrl = require('../controllers/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pokeView', Ctrl.pokeView)
router.post('/pokeQuery', Ctrl.pokeQuery)
router.get('/nasaView', Ctrl.nasaView)
router.post('/nasaQuery', Ctrl.nasaQuery)
router.get('/weatherView', Ctrl.weatherView)
router.post('/weatherQuery', Ctrl.weatherQuery)

module.exports = router;
