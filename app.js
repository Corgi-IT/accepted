module.exports = function accepted(obj, props) {
    if (!isObject(obj) || (!Array.isArray(props) && props.constructor !== String)) {
        return 'One or more parameters are not of the correct type';
    }

    if(props.constructor === String) {
        return obj[props] || obj[props] === null || obj[props] === undefined ? true : false;
    }

    const props_length = props.length;
    for (let i = 0; i < props_length; i++) {
        const prop = props[i];
        if (!obj[prop] || obj[prop] === null || obj[prop] === undefined) {
            return false;
        }
    }
    return true;
};

// Source: http://stackoverflow.com/a/25715455/4644434
function isObject (item) {
    return (typeof item === 'object' && !Array.isArray(item) && item !== null);
}
