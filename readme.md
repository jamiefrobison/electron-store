# electron-config [![Build Status: Linux and OS X](https://travis-ci.org/sindresorhus/electron-config.svg?branch=master)](https://travis-ci.org/sindresorhus/electron-config) [![Build status: Windows](https://ci.appveyor.com/api/projects/status/m2m9o6gq77xxi2eg/branch/master?svg=true)](https://ci.appveyor.com/project/sindresorhus/electron-config/branch/master)

> Simple config handling for your [Electron](http://electron.atom.io) app or module

Electron doesn't have a built-in way to persist user settings and other data. This module handles that for you, so you can focus on building your app. Config is saved in a JSON file in [`app.getPath('userData')`](http://electron.atom.io/docs/api/app/#appgetpathname).

You can use this module directly in both the main and renderer process.


## Install

```
$ npm install --save electron-config
```


## Usage

```js
const Config = require('electron-config');
const conf = new Config();

conf.set('unicorn', '🦄');
console.log(conf.get('unicorn'));
//=> '🦄'

// use dot-notation to access nested properties
conf.set('foo.bar', true);
console.log(conf.get('foo'));
//=> {bar: true}

conf.delete('unicorn');
console.log(conf.get('unicorn'));
//=> undefined
```


## API

### Config([options])

Returns a new instance.

### options

#### defaults

Type: `Object`

Default config.

#### name

Type: `string`<br>
Default: `config`

Name of the config file.

This is useful if you want multiple config files for your app. Or if you're making a reusable Electron module that persists some config, in which case you should **not** use the name `config`.

### Instance

You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a `key` to access nested properties.

The instance is [`iterable`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols) so you can use it directly in a [`for…of`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...of) loop.

#### .set(key, value)

Set an item.

#### .set(object)

Set multiple items at once.

#### .get(key)

Get an item.

#### .has(key)

Check if an item exists.

#### .delete(key)

Delete an item.

#### .clear()

Delete all items.

#### .size

Get the item count.

#### .store

Get all the config as an object or replace the current config with an object:

```js
conf.store = {
	hello: 'world'
};
```

#### .path

Get the path to the config file.


## Related

- [electron-debug](https://github.com/sindresorhus/electron-debug) - Adds useful debug features to your Electron app


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
