var express = require('express');
var router = express.Router();

let controller = require('../controllers/user.controller');
let validate = require('../validate/user.validate')
router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/cookie', (req, res, next) => {
    res.cookie('user-id', 12345);
    res.send('Hello');
})

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;