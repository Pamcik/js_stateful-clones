'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  const copy = { ...state };

  for (const i of actions) {
    switch (i.type) {
      case 'addProperties':
        Object.assign(copy, i.extraData);
        break;

      case 'removeProperties':
        for (const key of i.keysToRemove) {
          delete copy[key];
        }
        break;

      case 'clear':
        for (const key in copy) {
          delete copy[key];
        }
        break;
    }

    result.push({ ...copy });
  }

  return result;
}

module.exports = transformStateWithClones;
