# git-get-repos-labels
> A tiny helper to get a list of labels from the github repository

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-get-repos-labels/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-get-repos-labels)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-get-repos-labels.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-get-repos-labels)

## Install
```bash
npm install git-get-repos-labels
```

## Usage
```js
import gitGetReposLabels from 'git-get-repos-labels';

gitGetReposLabels({owner: 'scrum', repo: 'slims', token: '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f'});
//=> [{"name": "bug", "color": "d73a4a", "description": "Something isn't working"}, ...]
```
## API
#### `owner`

Type: `String`<*Required*>  
Default: ``  
Description: *Github owner or organization name.*

#### `repo`

Type: `String`<*Required*>  
Default: ``  
Description: *Repository name.*

#### `token`

Type: `String`<*Required*>  
Default: ``  
Description: *You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)*
