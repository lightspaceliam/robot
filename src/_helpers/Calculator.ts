import {
    numberOfUnits,
    robotLength,
    unitLength,
    startPoint
} from '../_defaults/Constants';
import ICoordinate from '../interfaces/ICoordinate';

function calculateRobotOffset(): number {

    return robotLength / 2;
}

function calculateUnitOffset(): number {
    return unitLength / 2;
}

function calculateCannotClickNext(value: number): boolean {
    const max: number = (((numberOfUnits - 1) / 4) - 1) * unitLength;

    return max === value || value === startPoint;
}

function calculateCannotClickPrev(value: number): boolean {
    const min: number = unitLength;

    return min === value || value === startPoint;
}

function calculateCannotRotate(coordinate: ICoordinate): boolean {
    return coordinate.x === startPoint || coordinate.x === startPoint;
}

export {
    calculateRobotOffset,
    calculateUnitOffset,
    calculateCannotClickNext,
    calculateCannotClickPrev,
    calculateCannotRotate
}