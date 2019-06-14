/**
 * Calculator Test/s. 
 */

import {
    numberOfUnits,
    robotLength,
    unitLength
} from '../_defaults/Constants';
import {
    calculateRobotOffset,
    calculateUnitOffset,
    calculateCannotClickNext,
    calculateCannotClickPrev
} from './Calculator';

test('Calculates Robot offset correctly', () => {
    const result = calculateRobotOffset();
    const half = robotLength / 2;

    expect(result).toBe(half);
});

test('Calculates Unit offset correctly', () => {
    const result = calculateUnitOffset();
    const half = unitLength / 2;

    expect(result).toBe(half);
});

test('Cannot click Next if at maximum point', () => {
    //const max: number = 5 * unitLength;
    const max: number = (((numberOfUnits - 1) / 4) - 1) * unitLength;

    const result = calculateCannotClickNext(max);

    expect(result).toBeTruthy();
});

test('Can click Next if not at maximum point', () => {
    //const max: number = 5 * unitLength;
    const value: number = 2;

    const result = calculateCannotClickNext(value);

    expect(result).toBeFalsy();
});

test('Can click Prev if not at minimum point', () => {

    const result = calculateCannotClickPrev(unitLength + 1);

    expect(result).toBeFalsy();
});

test('Cannot click Prev if at minimum point', () => {

    const result = calculateCannotClickPrev(unitLength);

    expect(result).toBeTruthy();
});


