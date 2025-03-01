interface String {
  startWithInvarient(searchTerm: string, ignoreCase?: boolean): boolean;
}

String.prototype.startWithInvarient = function (
  searchTerm: string,
  ignoreCase = true,
): boolean {
  let searchIn: string = this as string;

  if (ignoreCase) {
    searchTerm = searchTerm.toLocaleLowerCase();
    searchIn = searchIn.toLocaleLowerCase();
  }

  return searchIn.indexOf(searchTerm) === 0;
};
