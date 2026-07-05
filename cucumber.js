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
    ]
  },

  ui: {
    require: [
      'hooks/hooks.js',
      'step-definitions/**/*.js'
    ],
    paths: [
      'features/ui/**/*.feature'
    ],
    format: [
      'progress',
      'html:reports/ui-report.html'
    ]
  },

  api: {
    require: [
      'hooks/hooks.js',
      'step-definitions/**/*.js'
    ],
    paths: [
      'features/api/**/*.feature'
    ],
    format: [
      'progress',
      'html:reports/api-report.html'
    ]
  }
};