String.prototype.startWithInvarient = function (searchTerm, ignoreCase = true) {
    let searchIn = this;
    if (ignoreCase) {
        searchTerm = searchTerm.toLocaleLowerCase();
        searchIn = searchIn.toLocaleLowerCase();
    }
    return searchIn.indexOf(searchTerm) === 0;
};
//# sourceMappingURL=string-custom.extension.js.map