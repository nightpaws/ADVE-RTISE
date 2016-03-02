/**
 * Created by Nightpaws on 02/03/2016.
 */
//https://stackoverflow.com/questions/30462849/import-text-files-csv-format-into-mongodb-using-mongoose-schema
var mongoose = require('mongoose')
    , csv = require('fast-csv');

module.exports.importFile = function(filePath, fileHeaders, modelName) {
    csv
        .fromPath(filePath, {headers: fileHeaders})
        .on('data', function (data) {
            //var courseModel = require('./models/course.model.js');
            //var modelName = "";
            var Obj = mongoose.model(modelName);
            //mongoose.connection.db.dropCollection(modelName, function (err, result) {
            //});
            var obj = new Obj();

            Object.keys(data).forEach(function (key) {
                var val = data[key];

                if (val !== '')
                    obj.set(key, val);
            });

            obj.save(function (err) {
                if (err)
                    console.log(err);
            });
        })
        .on('end', function () {
            console.log("done");
        });
};
