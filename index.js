const assets = (data) => {
  let match;
  const assets = [];
  const rex = /<img[^>]+src="?([^"\s]+)"/g;
  while (match = rex.exec(data)) { // eslint-disable-line no-cond-assign
    if (match[1] !== '#' && match[1] !== '') {
      assets.push(match[1]);
    }
  }

  return assets;
};


module.exports = assets;

