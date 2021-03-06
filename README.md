# grunt-json-to-properties

> Grunt plugin for converting json to properties

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-to-properties --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-to-properties');
```

## The "json_to_properties" task

### Overview
In your project's Gruntfile, add a section named `json_to_properties` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_to_properties: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `{ "a": "b", "c": { "d": "e" } }` and the `123` file had the content `{ "a": "b", "c": { "d": "e" } }`, the generated result would be `a = b\nc.d = e\na1 = b1\nc1.d1 = e1`

```js
grunt.initConfig({
  json_to_properties: {
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
