var router = express.Router();

// middleware that is specific to this router
router
    .use(compression())
    .use(bodyParser.json())
    //auth
    .use(function timeLog(req, res, next) {
        log.info({port: "3100"});
        next();
    })

    //static assets
    .use(express.static(__dirname + '/public'))

    //home
    .get('*', function(req, res) {
        res.sendFile('index.html', { root: path.join('public') });
    })

module.exports = router;
