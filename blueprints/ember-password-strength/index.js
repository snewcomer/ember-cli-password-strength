module.exports = {
  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified (since that doesn't actually matter to us)
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('zxcvbn', '4.3.0');
  }
};
