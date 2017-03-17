request = require('request');


var router = express.Router(),
    select = require(__dirname + "/select.js" );

router
    .use(function timeLog(req, res, next) {
        var allowedOrigins = [
            'http://localhost:3100',
            'http://millennialagency.com'];
        var origin = req.headers.origin;
      
        if(allowedOrigins.indexOf(origin) > -1){
            res.setHeader('Access-Control-Allow-Origin', origin);
        }

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    })
  
    .get('/', function(req, res) {
        res.send('nodetech routing api version one. <a href="/">Go Back... like why are you even here?</a>\n<img src="http://data.whicdn.com/images/99121670/large.jpg">')
    })
    .use('/select', select)
    .use(redirectUnmatched);

module.exports = router;
