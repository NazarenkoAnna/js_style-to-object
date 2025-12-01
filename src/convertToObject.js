'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split(';');
  const result = lines.reduce((acc, rule) => {
    if (!rule.trim()) {
      return acc;
    }

    const [key, ...valueParts] = rule.split(':');

    if (!key || valueParts.length === 0) {
      return acc;
    }
    acc[key.trim()] = valueParts.join(':').trim();

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
