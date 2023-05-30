// specific functions
/**
 * check validity of input value type = text
 * @param {Object} input - the form field to be controlled => must be a text type
 */
export function nameValidity(text) {
  const regexName = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (!regexName.test(text)) {
    return false;
  }
  return true;
}
