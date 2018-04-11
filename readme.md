# npm-usernames-by-email 

> look up npm usernames by email address

Data comes from the [owner-profiles] and [owners] modules.

## Installation

```sh
npm i npm-usernames-by-email --save
```

## Usage (JS)

```js
const usernames = require('npm-usernames-by-email')

usernames['zeke@sikelianos.com']
// => ['zeke']

usernames['andrewbgoode@gmail.com']
// => ['abg', 'nexdrew']
```

## Usage (Command Line)

With `npx`:

```sh
$ npx npm-usernames-by-email zeke@sikelianos.com
zeke
```

With npm global installation:

```sh
$ npm i -g npm-usernames-by-email
$ npm-username zeke@sikelianos.com
zeke
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [jest](https://github.com/facebook/jest): Delightful JavaScript Testing.
- [owner-profiles](): Profile data for every npm author: name, email, GitHub handle, etc.
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT

[owner-profiles]: https://ghub.io/owner-profiles
[owners]: https://ghub.io/owners