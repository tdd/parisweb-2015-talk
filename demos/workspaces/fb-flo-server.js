var flo  = require('fb-flo'),
    path = require('path'),
    fs   = require('fs');

var server = flo(
  '.',
  {
    port: 8888,
    host: 'localhost',
    verbose: false,
    glob: [
      '**/*.js',
      '**/*.css'
    ]
  },
  function resolver(filepath, callback) {
    callback({
      resourceURL: 'workspaces/' + path.basename(filepath),
      contents: fs.readFileSync(filepath),
      update: function(_window, _resourceURL) {
        console.log("Resource " + _resourceURL + " has just been updated with new content");
      }
    });
  }
);
