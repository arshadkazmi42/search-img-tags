# search-img-tags

[![Build](https://github.com/arshadkazmi42/search-img-tags/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/search-img-tags/actions/workflows/nodejs.yml)
[![License](https://img.shields.io/npm/l/search-img-tags.svg)](https://github.com/arshadkazmi42/search-img-tags/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/search-img-tags)](https://github.com/arshadkazmi42/search-img-tags/graphs/contributors)
[![NPM Version](https://img.shields.io/npm/v/search-img-tags.svg)](https://www.npmjs.com/package/search-img-tags)
[![NPM Downloads](https://img.shields.io/npm/dt/search-img-tags.svg)](https://www.npmjs.com/package/search-img-tags)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/search-img-tags.svg)](https://github.com/arshadkazmi42/search-img-tags)
[![Activity](https://img.shields.io/github/commit-activity/m/arshadkazmi42/search-img-tags)](https://github.com/arshadkazmi42/search-img-tags/pulse)

Search image urls from &lt;img> tag from any HTML content

## Install

```bash
npm install search-img-tags
```

## Usage

```javascript
const SearchImgTags = require('search-img-tags');

const HTML = '<img src="https://github.com/arshadkazmi42"><a></a><b>Test</b><a href="https://google.com" />Click Here</a><p>This is a paragraph</p><a target="_" href="arshadkazmi42"><img src="test.png" /><img target="_" src="/images/1.png">';

const links = SearchImgTags(HTML);
console.log(links);
// [
//   'https://google.com',
//   'arshadkazmi42'
// ]
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/search-img-tags/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase
