export const obscureTitle = (str, _splitLength) => {
    let splitLength = _splitLength || 2;
    return `${str.slice(0, splitLength)}...`;
};