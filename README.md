# Description
A simple library that provides a result model (Inspired by Rust Result) for projects.

# Usage
+ Create results
```ts
const successfulResult = ok(1);
const unsuccessfulResult = err('oops');
```
+ Check if a result is successful
```ts
const isSuccessful = isOk(result);
const isUnsuccessful = isErr(result);
```
+ Get the value of a result
```ts
const data = expect(result, 'custom error message');
const data = unwrap(result);
const data = unwrapOrDefault(result, defaultValue);
const data = unwrapOrElse(result, func);
const data = unwrapOrUndefined(result);
const data = unwrapOrNull(result);
```
+ Transform a result
```ts
const result = mapResultData(result, func);
const result = mapResultDataOrDefault(result, func, defaultValue);
const result = mapResultError(result, func);
```
