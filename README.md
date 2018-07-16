
# @tiaanduplessis/cleanup
[![package version](https://img.shields.io/npm/v/@tiaanduplessis/cleanup.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/cleanup)
[![package downloads](https://img.shields.io/npm/dm/@tiaanduplessis/cleanup.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/cleanup)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@tiaanduplessis/cleanup.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/cleanup)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Cleanup when process is terminated

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install @tiaanduplessis/cleanup
$ # OR
$ yarn add @tiaanduplessis/cleanup
```

## Usage

```js
const {cleanup} = require('@tiaanduplessis/cleanup')

const remove = cleanup((opts) => {
  console.log(opts) // { event: 'SIGINT' }
  session.close()
  driver.close()
}, {
  exit: true // call process.exit after handler
})

remove()// will remove handler

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    