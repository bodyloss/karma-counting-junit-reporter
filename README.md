# Karma No Duplicates JUnit Reporter

This is a really simple package that wraps up the [karma-junit-reporter](https://github.com/karma-runner/karma-junit-reporter) and adds a number to the end of duplicate spec names.

The reason this exists is some CI platforms (i.e. Bamboo) report the number of tests incorrectly if there are duplicate tests.

## Usage

Use it exactly the same as `karma-junit-reporter`:

```javascript
reporters: ['counting-junit'],
plugins: [
  require('karma-dedup-junit-reporter')
]
```
