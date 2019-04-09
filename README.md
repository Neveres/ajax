# ajax [![Build Status](https://travis-ci.org/Neveres/ajax.svg?branch=master)](https://travis-ci.org/Neveres/ajax)

> A free and open source library for performing an asynchronous HTTP (Ajax) request.

**Table of Contents**

- [Install](#Install)
- [Usage](#Usage)

<a name="Install"></a>

```shell
$ npm i -D ajax
```
<a name="Usage"></a>

## Importing

```js
import ajax from 'ajax'; // ES6
var ajax = require('ajax'); // ES5 with npm
```

## Usage

```js
ajax( url [, settings ] [, handlers] )
```
- url (Type: `String`)
> A string containing the URL to which the request is sent.

- settings (Type: `Object`)
> A set of key/value pairs that configure the Ajax request. All settings are optional. See below for a complete list of all settings.

- handlers (Type: `Object`)
> A set of handler function.


### settings

| key | type | description | default |
| - | - | - | - |
| accepts | `Object` |  |  |
| async | `Boolean` | | `true` |
| cache | `Boolean` |  | `true` |
| contents | `Object` |  |  |
| contentType | `Boolean` or `String` |  | `'application/x-www-form-urlencoded; charset=UTF-8'` |
| context | `Object` |  |  |
| converters | `Object` |  | `{"* text": window.String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML}` |
| crossDomain | `Boolean` |  | `false` for same-domain requests, `true` for cross-domain requests |
| data | `Object` or `String` or `Array` |  |  |
| dataType | `String` |  |  |
| global | `Boolean` |  | `true` |
| headers | `Object` |  | `{}` |
| ifModified | `Boolean` |  | `false` |
| isLocal | `Boolean` |  | depends on current location protocol |
| method | `String` |  | `GET` |
| mimeType | `String` |  |  |
| password | `String` |  |  |
| processData | `Boolean` |  | `true` |
| scriptCharset | `String` |  |  |
| statusCode | `Object` |  | `{}` |
| traditional | `Boolean` |  |  |
| type | `String` |  | `GET` |
| url  | `String` |  | The current page |
| username | `String` |  |  |
| xhr | `Function` |  | `ActiveXObject` when available (IE), the `XMLHttpRequest` otherwise |
| xhrFields | `Object` |  |  |


### handlers

| key | description |
| - | - |
| beforeSend |  |
| complete |  |
| dataFilter | |
| error |  |
| success |  |
| timeout |  |

*Note: the above spec is reference to [jQuery.ajax()](http://api.jquery.com/jquery.ajax/)*