module.exports = {
  default: {
    require: [
      'hooks/hooks.js',
      'step-definitions/**/*.js'
    ],
    paths: [
      'features/**/*.feature'
    ],
    format: [
      'progress',
      'html:reports/cucumber-report.html'
    ],
    publishQuiet: true
  }
};
