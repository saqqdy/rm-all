<div style="text-align: center;" align="center">

# rm-all

A simple deep deletion module for node (like `rm -rf`)

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

</div>

## Installing

```bash
# use pnpm
$ pnpm install -g rm-all

# use npm
$ npm install -g rm-all

# use yarn
$ yarn global add rm-all
```

## Usage

1. Delete all files in lib and dist.

```bash
rm-all dist lib
# or
rmall dist lib
# or
rma dist lib
```

2. Use commas to separate multiple paths

```bash
rm-all dist,lib
# or
rmall dist,lib
# or
rma dist,lib
```

3. Using wildcards

Not support yet

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/rm-all/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/rm-all.svg?style=flat-square
[npm-url]: https://npmjs.org/package/rm-all
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/rm-all/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/rm-all&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/rm-all.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/rm-all?branch=master
[download-image]: https://img.shields.io/npm/dm/rm-all.svg?style=flat-square
[download-url]: https://npmjs.org/package/rm-all
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_rm-all
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_rm-all
