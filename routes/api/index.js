bodyParser = require('body-parser');

var router = express.Router(),
    v1 = require('./v1/index.js'),
    v2 = require('./v2/index.js');

// middleware that is specific to this router
router
    .use(bodyParser.json())
    //api
    .get('/', function(req, res) {
        res.send('nodetech routing api version one. <a href="/">why are you even here?</a>\n<img src="http://img1.rnkr-static.com/list_img_v2/15823/895823/full/resting-bitch-face-who-does-it-best-u1.jpg">')
    })
    .use('/v1', v1)
    .use('/v2', v2)
    .use(redirectUnmatched);

module.exports = router;