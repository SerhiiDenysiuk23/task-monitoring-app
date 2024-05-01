import { expect } from '@jest/globals'
import { toRoundFixed } from './helpers'

describe('Parse string to float', () => {
  it('Handle 0 values', () => {
    expect(toRoundFixed('0')).toBe('0')
    expect(toRoundFixed('0.')).toBe('0')
    expect(toRoundFixed('0,')).toBe('0')
  })

  it('Handle large floating point values', () => {
    expect(toRoundFixed('0.0000000003')).toBe('0')
    expect(toRoundFixed('0,0000000003')).toBe('0')
    expect(toRoundFixed('-0.0000000003')).toBe('0')
    expect(toRoundFixed('-0,0000000003')).toBe('0')
  })

  it('Handle .x values', () => {
    expect(toRoundFixed('123,4')).toBe('123.4')
    expect(toRoundFixed('123.4')).toBe('123.4')
    expect(toRoundFixed('-123,4')).toBe('-123.4')
    expect(toRoundFixed('-123.4')).toBe('-123.4')

    expect(toRoundFixed('12345678,9')).toBe('12345678.9')
    expect(toRoundFixed('12345678.9')).toBe('12345678.9')
    expect(toRoundFixed('-12345678,9')).toBe('-12345678.9')
    expect(toRoundFixed('-12345678.9')).toBe('-12345678.9')
  })

  it('Handle .x0 values as .x', () => {
    expect(toRoundFixed('123,40')).toBe('123.4')
    expect(toRoundFixed('123.40')).toBe('123.4')
    expect(toRoundFixed('-123,40')).toBe('-123.4')
    expect(toRoundFixed('-123.40')).toBe('-123.4')

    expect(toRoundFixed('12345678,90')).toBe('12345678.9')
    expect(toRoundFixed('12345678.90')).toBe('12345678.9')
    expect(toRoundFixed('-12345678,90')).toBe('-12345678.9')
    expect(toRoundFixed('-12345678.90')).toBe('-12345678.9')
  })

  it('Handle .xx values', () => {
    expect(toRoundFixed('123,45')).toBe('123.45')
    expect(toRoundFixed('123.45')).toBe('123.45')
    expect(toRoundFixed('-123,45')).toBe('-123.45')
    expect(toRoundFixed('-123.45')).toBe('-123.45')

    expect(toRoundFixed('12345678,99')).toBe('12345678.99')
    expect(toRoundFixed('12345678.99')).toBe('12345678.99')
    expect(toRoundFixed('-12345678,99')).toBe('-12345678.99')
    expect(toRoundFixed('-12345678.99')).toBe('-12345678.99')
  })

  it('Handle .xx0 values as .xx', () => {
    expect(toRoundFixed('123,450')).toBe('123.45')
    expect(toRoundFixed('123.450')).toBe('123.45')
    expect(toRoundFixed('-123,450')).toBe('-123.45')
    expect(toRoundFixed('-123.450')).toBe('-123.45')

    expect(toRoundFixed('12345678,990')).toBe('12345678.99')
    expect(toRoundFixed('12345678.990')).toBe('12345678.99')
    expect(toRoundFixed('-12345678,990')).toBe('-12345678.99')
    expect(toRoundFixed('-12345678.990')).toBe('-12345678.99')
  })

  it('Handle .xx(x < 5) values as rounded DOWN .xx', () => {
    expect(toRoundFixed('123,454')).toBe('123.45')
    expect(toRoundFixed('123,454')).toBe('123.45')
    expect(toRoundFixed('-123,454')).toBe('-123.45')
    expect(toRoundFixed('-123,454')).toBe('-123.45')

    expect(toRoundFixed('1,001')).toBe('1')
    expect(toRoundFixed('1.001')).toBe('1')
    expect(toRoundFixed('-1,001')).toBe('-1')
    expect(toRoundFixed('-1.001')).toBe('-1')
  })

  it('Handle .xx(x >= 5) values as rounded UP .xx', () => {
    expect(toRoundFixed('123,459')).toBe('123.46')
    expect(toRoundFixed('123.459')).toBe('123.46')
    expect(toRoundFixed('-123,459')).toBe('-123.46')
    expect(toRoundFixed('-123.459')).toBe('-123.46')

    expect(toRoundFixed('1,999')).toBe('2')
    expect(toRoundFixed('1.999')).toBe('2')
    expect(toRoundFixed('-1,999')).toBe('-2')
    expect(toRoundFixed('-1.999')).toBe('-2')
  })

  it('Handle unappropriate values', () => {
    expect(toRoundFixed('')).toBe('0')

    expect(toRoundFixed(undefined)).toBe('0')
    expect(toRoundFixed('undefined')).toBe('0')

    expect(toRoundFixed(null)).toBe('0')
    expect(toRoundFixed('null')).toBe('0')

    expect(toRoundFixed(NaN)).toBe('0')
    expect(toRoundFixed('NaN')).toBe('0')

    expect(toRoundFixed('label')).toBe('0')

    expect(toRoundFixed([])).toBe('0')
    expect(toRoundFixed('[]')).toBe('0')

    expect(toRoundFixed({})).toBe('0')
    expect(toRoundFixed('{}')).toBe('0')
  })
})
