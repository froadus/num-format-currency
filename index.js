module.exports = (settings) => {
  let groupSeparator = '';
  let decimalSeparator = '';
  let decimals = 2;
  let prefix = '';
  let suffix = '';
  if (settings) {
    groupSeparator = settings.groupSeparator ? settings.groupSeparator : '';
    decimalSeparator = settings.decimalSeparator ? settings.decimalSeparator : '';
    decimals = settings.decimals !== undefined ? settings.decimals : 2;
    prefix = settings.prefix ? settings.prefix : '';
    suffix = settings.suffix ? settings.suffix : '';
  }

  return (number) => {
    var str;
    if (typeof number === 'string')
      str = number.split('.');
    else if (typeof number === 'number')
      str = number.toString().split('.');
    else return;
    if (str[0].length >= 5) {
      str[0] = str[0]
        .replace(/(\d)(?=(\d{3})+$)/g, '$1' + groupSeparator);
    }
    if (str[1]) {
      if (decimals)
        str[1] = str[1].substr(0, decimals);
      else return prefix + str[0] + suffix;
    }
    return prefix + str.join(decimalSeparator) + suffix;
  };
};