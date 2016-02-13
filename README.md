# jekyll-postcss-browserify

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![Build Status](https://travis-ci.org/cbracco/jekyll-postcss-browserify.svg)](https://travis-ci.org/cbracco/jekyll-postcss-browserify)

> A boilerplate for building static websites with [Gulp][gulp], [Jekyll][jekyll], [PostCSS][postcss], [Browserify][browserify], [imagemin][imagemin], [svg-sprite][svg-sprite], and more.

This project is an opinionated front-end boilerplate for developing and deploying static websites using [Jekyll][jekyll]. It includes several front-end tools that help facilitate the development process, and [Gulp][gulp] to automate common development tasks, compiling source code, watching files for changes, and deployment.

- [Features](#features)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Developing](#developing)
    - [Publishing](#publishing)
    - [Deploying](#deploying)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Changelog](#changelog)
  - [License](#license)

## Features

- [Gulp][gulp] as a build system to automate tasks, compile source code, watch files for changes, and deployment.
- [Jekyll][jekyll] as a blog-focused static site generator that uses the [Liquid][liquid] templating language.
- [PostCSS][postcss] for CSS [file imports][postcss-import], [url rebasing][postcss-url], [future-friendly syntax, vendor prefixing][postcss-cssnext], and more.
- [Browserify][browserify] for requiring JavaScript modules and bundling dependencies in the browser.
- [imagemin][imagemin] for compressing image files.
- [svg-sprite][svg-sprite] to automatically generate and optimize an SVG sprite from raw SVG icon files.
- [Browsersync][browsersync] with [xip.io][xip.io] for serving files, live-reloading browsers, and multi-device testing.

## Requirements

This project is compatible with **Linux**, **Unix**, and **Mac OSX** operating systems. It requires the following software to be already installed on your system:

- [Ruby][ruby]
- [RubyGems][rubygems]
- [Bundler][rubybundler]
- [Node.js][node]
- [npm][npm]

**Running Windows?** Jekyll does not officially support the Windows operating system, but they do provide [special instructions][jekyll-windows] if you want to take a crack at it anyway.

## Installation

Clone this repository to your local machine, and install its dependencies with the following command(s):

```bash
git clone git@github.com:cbracco/jekyll-postcss-browserify.git
cd jekyll-postcss-browserify/
npm install
```

The `npm install` command will first run `bundle install` to install the required Ruby gems, and then `npm install` for the required npm modules.

## Usage

### Developing

To start working, first run the following command(s):

```bash
npm start
```

The `npm start` command will run the [default Gulp task][gulp-task-default] which builds the Jekyll templates and compiles the website assets, starts a local server (http://127.0.0.1.xip.io:9999) with Browsersync, opens the project in the default browser, and begins watching for file changes.

This is considered **“Development Mode”**, which means that the files being served in this local environment are not yet minified or optimized for deployment.

### Publishing

To publish a production-ready version of the website, run the following command(s):

```bash
npm run prod
```

The `npm run prod` command will run the [production Gulp task][gulp-task-prod] which deletes any existing production builds, builds a new production-ready version of the website, starts a local server (http://127.0.0.1.xip.io:9998) with Browsersync, and opens the project in the default browser.

This can be considered **Production Mode”**, which means that the files being served in this local environment are minified and optimized for deployment. It is intended to mimic the production environment on your local environment, so you can preview exactly what you will see before you deploy the website to a production server.

### Deploying

Before deploying the website, first create a file called `rsync-credentials.json` and fill it with the following information:

```json
{
  "destination": "/path/to/your/website",
  "hostname": "example.com",
  "username": "person",
  "port": 666
}
```

Then, run the following command(s) to deploy a production-ready version of the website to a remote server:

```bash
npm run deploy
```

The `npm run deploy` command will run the [deploy Gulp task][gulp-task-deploy] which deletes any existing production builds, builds a new production-ready version of the website, and uses [rsync][rsync] to upload the website to the specified remote server.

## Credits

> *“If I have seen further it is by standing on ye sholders of Giants.”*
> &mdash; [Issac Newton][issac-newton-quote]

jekyll-postcss-browserify is a project by [@cbracco][cbracco] and its [contributors][contributors]. It is influenced by the following organizations, projects, articles, and individuals:

- [gulp-tutorial][gulp-tutorial] by [@kogakure][kogakure]
- [tape-standard][tape-standard] by [@rstacruz][rstacruz]

Thank you all for your hard work.

## [Contributing](CONTRIBUTING.md)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)

[browserify]: http://browserify.org
[browsersync]: https://browsersync.io
[cbracco]: https://github.com/cbracco
[contributors]: https://github.com/cbracco/jekyll-postcss-browserify/graphs/contributors
[gulp]: http://gulpjs.com
[gulp-task-default]: tools/gulp/tasks/default.js
[gulp-task-deploy]: tools/gulp/tasks/deploy.js
[gulp-task-prod]: tools/gulp/tasks/prod.js
[gulp-tutorial]: https://github.com/kogakure/gulp-tutorial
[imagemin]: https://github.com/imagemin/imagemin
[issac-newton-quote]: https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants
[jekyll]: https://jekyllrb.com
[jekyll-windows]: http://jekyllrb.com/docs/windows/#installation
[kogakure]: https://github.com/kogakure
[liquid]: http://liquidmarkup.org
[node]: https://nodejs.org/en/
[npm]: https://www.npmjs.com
[postcss]: http://postcss.org
[postcss-cssnext]: https://github.com/MoOx/postcss-cssnext
[postcss-import]: https://github.com/postcss/postcss-import
[postcss-url]: https://github.com/postcss/postcss-url
[rstacruz]: https://github.com/rstacruz
[rsync]: http://linux.die.net/man/1/rsync
[ruby]: https://www.ruby-lang.org/en/
[rubybundler]: http://bundler.io
[rubygems]: https://rubygems.org
[svg-sprite]: https://github.com/jkphl/svg-sprite
[tape-standard]: https://github.com/rstacruz/tape-standard
[xip.io]: http://xip.io
