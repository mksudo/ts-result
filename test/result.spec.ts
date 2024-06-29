import { assert } from 'chai';
import * as Result from '../src/index';
import { describe, it } from 'node:test';

describe('test create result', () => {
  it('should create a successful result', () => {
    const result = Result.ok(1);
    assert.isTrue(result.success);
    assert.equal(result.data, 1);
  });

  it('should create an unsuccessful result', () => {
    const result = Result.err('error');
    assert.isFalse(result.success);
    assert.equal(result.error, 'error');
  });
});

describe('test check result', () => {
  it('should check a successful result', () => {
    const result = Result.ok(1);
    assert.isTrue(Result.isOk(result));
  });

  it('should check an unsuccessful result', () => {
    const result = Result.err('error');
    assert.isFalse(Result.isOk(result));
  });
});

describe('test result utils', () => {
  it('should expect a successful result', () => {
    const result = Result.ok(1);
    const data = Result.expect(result, 'error');
    assert.equal(data, 1);
  });

  it('should expect an unsuccessful result', () => {
    const result = Result.err('error');
    assert.throws(() => Result.expect(result, 'error'), 'error');
  });

  it('should unwrap a successful result', () => {
    const result = Result.ok(1);
    const data = Result.unwrap(result);
    assert.equal(data, 1);
  });

  it('should unwrap an unsuccessful result', () => {
    const result = Result.err('error');
    assert.throws(() => Result.unwrap(result), 'unsuccessful result');
  });

  it('should unwrap or default a successful result', () => {
    const result = Result.ok(1);
    const data = Result.unwrapOrDefault(result, 2);
    assert.equal(data, 1);
  });

  it('should unwrap or default an unsuccessful result', () => {
    const result = Result.err('error');
    const data = Result.unwrapOrDefault(result, 2);
    assert.equal(data, 2);
  });

  it('should unwrap or else a successful result', () => {
    const result = Result.ok(1);
    const data = Result.unwrapOrElse(result, () => 2);
    assert.equal(data, 1);
  });

  it('should unwrap or else an unsuccessful result', () => {
    const result = Result.err('error');
    const data = Result.unwrapOrElse(result, () => 2);
    assert.equal(data, 2);
  });

  it('should unwrap or undefined a successful result', () => {
    const result = Result.ok(1);
    const data = Result.unwrapOrUndefined(result);
    assert.equal(data, 1);
  });

  it('should unwrap or undefined an unsuccessful result', () => {
    const result = Result.err('error');
    const data = Result.unwrapOrUndefined(result);
    assert.isUndefined(data);
  });

  it('should unwrap or null a successful result', () => {
    const result = Result.ok(1);
    const data = Result.unwrapOrNull(result);
    assert.equal(data, 1);
  });

  it('should unwrap or null an unsuccessful result', () => {
    const result = Result.err('error');
    const data = Result.unwrapOrNull(result);
    assert.isNull(data);
  });

  it('should map data a successful result', () => {
    const result: Result.Result<number, string> = Result.ok(1);
    const data = Result.mapResultData(result, (data) => data + 1);
    assert.equal(Result.unwrap(data), 2);
  });

  it('should map data an unsuccessful result', () => {
    const result: Result.Result<number, string> = Result.err('error') as any;
    const data = Result.mapResultData(result, (data) => data + 1);
    if (Result.isErr(data)) {
      assert.equal(data.error, 'error');
    } else {
      assert.fail('should be an error');
    }
  });

  it('should map or default data a successful result', () => {
    const result: Result.Result<number, string> = Result.ok(1);
    const data = Result.mapResultDataOrDefault(result, (data) => data + 1, 2);
    assert.equal(Result.unwrap(data), 2);
  });

  it('should map or default data an unsuccessful result', () => {
    const result: Result.Result<number, string> = Result.err('error') as any;
    const data = Result.mapResultDataOrDefault(result, (data) => data + 1, 2);
    assert.equal(Result.unwrap(data), 2);
  });

  it('should map error a successful result', () => {
    const result: Result.Result<number, string> = Result.ok(1);
    const data = Result.mapResultError(result, (error) => error + 'error');
    if (Result.isOk(data)) {
      assert.equal(data.data, 1);
    } else {
      assert.fail('should be a success');
    }
  });

  it('should map error an unsuccessful result', () => {
    const result: Result.Result<number, string> = Result.err('error');
    const data = Result.mapResultError(result, (error) => error + 'error');
    if (Result.isErr(data)) {
      assert.equal(data.error, 'errorerror');
    } else {
      assert.fail('should be an error');
    }
  });
});
