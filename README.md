es6-prototype-boilerplate
=========================

> A boilerplate for prototype using ES6

## Install
```bash
git clone https://github.com/dmnsgn/es6-prototype-boilerplate.git && cd es6-prototype-boilerplate/ && rm -rf .git
npm i
```

## Scripts
### Dev

Start browsersync, watch ES6 scripts (babel) & styles (stylus) with sourcemap and concat vendor using `vendor` key in package.json (`node scripts/vendor.js`).

```bash
npm run dev
```

### Build

Minify ES6 scripts (uglify), compress styles and delete sourcemap files.

```bash
npm run build
```

## Licence

ISC
