var junitReporter = require('karma-junit-reporter')['reporter:junit'][1];

var CountingJUnitReporter = function () {
  junitReporter.apply(this, arguments);

  var _originalSpecFunc = this.specSuccess;
  var seenSpecs = {};

  this.specSuccess = this.specSkipped = this.specFailure = function (browser, result) {
    if (seenSpecs[result.description]) {
      var copy = Object.create(result);
      copy.description = copy.description + ' #' + (++seenSpecs[result.description]);
      return _originalSpecFunc(browser, copy);
    }

    seenSpecs[result.description] = 1;
    return _originalSpecFunc(browser, result);
  }
}

CountingJUnitReporter.$inject = junitReporter.$inject;

module.exports = {
  'reporter:counting-junit': ['type', CountingJUnitReporter]
}
