# Accepted #
Small module that checks if the given object has given properties and are not null or undefined

## Requirements ##
To use this module, one the following is required:

+ Node.js v6.0.0 or higher
+ An env that accepts ES6' const and let

## Installation ##
You can install this module with NPM:

    npm install --save accepted

## Usage ##
#### Require the library ####
```ES6
    const accepted = require('accepted');
```

#### Define an Object (or get one) ####
```ES6
    const obj = {
        foo: 'bar',
        baz: 'qux',
        nope: null,
        sub_obj: {exists: 'Yes!'},
        sub_arr: ['element']
    }
```
#### Start checking! ####
Success!
```ES6
    if(!accepted(obj, ['foo', 'baz'])) {
        return 'Not all required props are given';
    }

    // Go on with life
```

Oops!
```ES6
    if(!accepted(obj, ['nope', 'non-existend'])) {
        return 'Not all required props are given';
    }

    // Life stopped, accepted returned false
``
