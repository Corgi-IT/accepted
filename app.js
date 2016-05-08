module.exports = function accepted(obj, props) {
    if (obj.constructor !== Object || props.constructor !== Array) {
        throw 'One or more parameters are not of the correct type';
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
