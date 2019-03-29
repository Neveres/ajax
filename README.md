[![Build Status](https://travis-ci.org/Neveres/ajax.svg?branch=master)](https://travis-ci.org/Neveres/ajax)

# ajax

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
ajax( url [, settings ] )
```
- url (Type: String)
> A string containing the URL to which the request is sent.

- settings (Type: PlainObject)
> A set of key/value pairs that configure the Ajax request. All settings are optional. See below for a complete list of all settings.

| key | type | description | default |
| - | - | - | - |
| accepts | PlainObject | A set of key/value pairs that map a given dataType to its MIME type, which gets sent in the Accept request header. This header tells the server what kind of response it will accept in return. For example, the following defines a custom type mycustomtype to be sent with the request | depends on dataType |