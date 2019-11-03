var { mysql } = require('./connections/connection')
var { con } = require('./connections/connection')


con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM msr_bit", function(err, result, fields) {
        if (err) throw err;
        //var resultParse = JSON.parse(result)
        //console.log(resultParse['0']);
        //console.log(typeof resultParse);
        //console.log(result);
        console.log(JSON.stringify(result[2], undefined, 2));
    });
});