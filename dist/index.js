/**
 * Create a successful result with the provided data
 *
 * @param data data carried by the successful result
 * @returns a successful result
 */
export const ok = (data) => ({ success: true, data });
/**
 * Create an unsuccessful result with the provided error
 *
 * @param error error carried by the unsuccessful result
 * @returns an unsuccessful result
 */
export const err = (error) => ({ success: false, error });
/**
 * Check whether the provided result is successful
 *
 * @param result the result to be checked
 * @returns the result as a successful result
 */
export const isOk = (result) => result.success;
/**
 * Check whether the provided result is unsuccessful
 *
 * @param result the result to be checked
 * @returns the result as an unsuccessful result
 */
export const isErr = (result) => !result.success;
/**
 * Get the data carried by the result if the result is successful,
 * otherwise throw an error with the provided message
 *
 * @param result the result to be handled
 * @param message the message to be throwed if the result is unsuccessful
 * @returns the data carried by the result if the result is successful
 * @throws an error with the provided message
 */
export const expect = (result, message) => {
    if (result.success)
        return result.data;
    throw new Error(message);
};
/**
 * Get the data carried by the result if the result is successful,
 * otherwise throw an error
 *
 * @param result the result to be handled
 * @returns the data carried by the result if the result is successful
 * @throws an error with the provided message
 */
export const unwrap = (result) => {
    if (result.success)
        return result.data;
    throw new Error('unsuccessful result');
};
/**
 * Get the data carried by the result if the result is successful,
 * otherwise return the provided default value
 *
 * @param result the result to be unwrapped
 * @param defaultValue the default value to be returned if the result is unsuccessful
 * @returns the data carried by the result if the result is successful,
 *          otherwise the provided default value
 */
export const unwrapOrDefault = (result, defaultValue) => {
    return result.success ? result.data : defaultValue;
};
/**
 * Get the data carried by the result if the result is successful,
 * otherwise return the result of the provided function
 *
 * @param result the result to be unwrapped
 * @param func the function to be called if the result is unsuccessful
 * @returns the data carried by the result if the result is successful,
 *          otherwise the result of calling the provided function with the error
 */
export const unwrapOrElse = (result, func) => {
    return result.success ? result.data : func(result.error);
};
/**
 * Get the data carried by the result if the result is successful,
 * otherwise return undefined
 *
 * @param result the result to be unwrapped
 * @returns the data carried by the result if the result is successful,
 *          otherwise undefined
 */
export const unwrapOrUndefined = (result) => {
    return result.success ? result.data : undefined;
};
/**
 * Get the data carried by the result if the result is successful,
 * otherwise return null
 *
 * @param result the result to be unwrapped
 * @returns the data carried by the result if the result is successful,
 *          otherwise null
 */
export const unwrapOrNull = (result) => {
    return result.success ? result.data : null;
};
/**
 * Map the data carried by the result if the result is successful,
 * otherwise do nothing to the result and return it
 *
 * @param result the result to be mapped
 * @param func the function to be called on the data carried by the result
 * @returns the result with the data carried by the result mapped
 */
export const mapResultData = (result, func) => {
    return result.success ? ok(func(result.data)) : result;
};
/**
 * Map the data carried by the result if the result is successful,
 * otherwise return the provided default value
 *
 * @param result the result to be mapped
 * @param func the function to be called on the data carried by the result
 * @param defaultValue the default value to be returned if the result is unsuccessful
 * @returns the result with the data carried by the result mapped,
 *          otherwise the provided default value
 */
export const mapResultDataOrDefault = (result, func, defaultValue) => {
    return result.success ? ok(func(result.data)) : ok(defaultValue);
};
/**
 * Map the error carried by the result if the result is unsuccessful,
 * otherwise do nothing to the result and return it
 *
 * @param result the result to be mapped
 * @param func the function to be called on the error carried by the result
 * @returns the result with the error carried by the result mapped
 */
export const mapResultError = (result, func) => {
    return result.success ? result : err(func(result.error));
};
