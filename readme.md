# git-repos-labels
> A iny helper to get a list of labels from the github repository

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-repos-labels/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-repos-labels)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-repos-labels.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-repos-labels)

## Install
```bash
npm install git-repos-labels
```

## Usage
```js
import gitReposLabels from 'git-repos-labels';

gitReposLabels('scrum', 'slims', '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f')
//=> [{"name": "bug", "color": "d73a4a", "description": "Something isn't working"}, ...]
```

## API
### gitReposLabels(owner, name, token)
 - **owner** - Github owner or organization name.
 - **name** - Repository name.
 - **token** - You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)