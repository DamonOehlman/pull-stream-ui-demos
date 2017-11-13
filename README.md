# FE Engineering Pull-Stream Presentation

[![NPM](https://nodei.co/npm/pull-stream-ui.png)](https://nodei.co/npm/pull-stream-ui/)

## What is a Pull Stream?

## Building Blocks of Pull Streams

* Sources
* Sinks
* Throughs


## Example Pull Stream

```js
pull(
  values([1, 2, 3]),
  log()
);
```

## Pull Streams vs Node Streams (operation)

* Node streams are like a tap that you turn on
* Pull streams are more like siphoning fluid


## Pull Streams vs Node Streams (implementation)

* Node streams are heavy
* Pull streams are light


## Composability

## Anatomy of a pull stream

* show implementation of a source and sink


## Example Use Cases

## Observable Structures

### Look really good

* <https://github.com/forceuser/active-data>
* <https://github.com/AntonLapshin/proxy-observable>
* <https://github.com/cb1kenobi/gawk>


### Undecided

* <https://github.com/vigour-io/brisky-struct>
* <https://github.com/montagejs/collections>
* <https://github.com/ampersandjs/ampersand-state>
* <https://github.com/eface2face/object-observable>
* <https://github.com/soenkekluth/object-state-store>


## See Also

* bacon.js (<https://github.com/baconjs/bacon.js>)
* RxJS