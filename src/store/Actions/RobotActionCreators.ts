import ActionKeys from './RobotActionKeys';
import ICoordinate from '../../interfaces/ICoordinate';
import { unitLength } from '../../_defaults/Constants';
import {
    RotateRobotFaceType,
    MoveRobotUpType,
    MoveRobotDownType,
    MoveRobotLeftType,
    MoveRobotRightType,
    ReportRobotLocationType
} from './RobotActionTypes'

function updateRobotPosition(x: number, y: number, f: number) {

    try {
        const coordinate: ICoordinate = {
            x: x,
            y: y,
            f: f
        };
        //throw 'My error!';
        return {
            type: ActionKeys.UPDATE_ROBOT_ACTION,
            coordinate: coordinate
        };
    } catch (error) {
        return {
            type: ActionKeys.ERROR_ROBOT_ACTION,
            errorMessage: error
        }
    }
}

function reportRobotLocation(coordinate: ICoordinate): ReportRobotLocationType {
    const report: string = `X: ${coordinate.x}, Y: ${coordinate.y}, F: ${coordinate.f}`;
    return {
        type: ActionKeys.REPORT_ROBOT_LOCATION_ACTION,
        report: report
    }
}

function rotateRobotFace(coordinate: ICoordinate): RotateRobotFaceType {

    const INCREMENT: number = 90;

    const f: number = coordinate.f === 270
        ? 0
        : coordinate.f + INCREMENT
    coordinate.f = f;
    return {
        type: ActionKeys.ROTATE_ROBOT_FACE_ACTION,
        coordinate: coordinate
    }
}

function moveRobotUp(coordinate: ICoordinate): MoveRobotUpType {

    const y: number = coordinate.y + unitLength;
    coordinate.y = y;

    return {
        type: ActionKeys.MOVE_ROBOT_UP_ACTION,
        coordinate: coordinate
    }
}

function moveRobotDown(coordinate: ICoordinate): MoveRobotDownType {

    const y: number = coordinate.y - unitLength;
    coordinate.y = y;

    return {
        type: ActionKeys.MOVE_ROBOT_DOWN_ACTION,
        coordinate: coordinate
    }
}

function moveRobotLeft(coordinate: ICoordinate): MoveRobotLeftType {

    const x: number = coordinate.x - unitLength;
    coordinate.x = x;

    return {
        type: ActionKeys.MOVE_ROBOT_LEFT_ACTION,
        coordinate: coordinate
    }
}

function moveRobotRight(coordinate: ICoordinate): MoveRobotRightType {

    const x: number = coordinate.x + unitLength;
    coordinate.x = x;

    return {
        type: ActionKeys.MOVE_ROBOT_RIGHT_ACTION,
        coordinate: coordinate
    }
}

export {
    updateRobotPosition,
    rotateRobotFace,
    moveRobotUp,
    moveRobotDown,
    moveRobotLeft,
    moveRobotRight,
    reportRobotLocation
};