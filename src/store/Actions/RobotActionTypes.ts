/**
 * Robot Action Types.
 */
import { Action } from 'redux';
import ActionKeys from './RobotActionKeys';
import ICoordinate from '../../interfaces/ICoordinate';

export interface UpdateRobotActionType extends Action {
    readonly type: typeof ActionKeys.UPDATE_ROBOT_ACTION,
    readonly coordinate: ICoordinate
}

export interface RotateRobotFaceType extends Action {
    readonly type: typeof ActionKeys.ROTATE_ROBOT_FACE_ACTION,
    readonly coordinate: ICoordinate
}

export interface MoveRobotUpType extends Action {
    readonly type: typeof ActionKeys.MOVE_ROBOT_UP_ACTION,
    readonly coordinate: ICoordinate
}

export interface MoveRobotDownType extends Action {
    readonly type: typeof ActionKeys.MOVE_ROBOT_DOWN_ACTION,
    readonly coordinate: ICoordinate
}

export interface MoveRobotLeftType extends Action {
    readonly type: typeof ActionKeys.MOVE_ROBOT_LEFT_ACTION,
    readonly coordinate: ICoordinate
}

export interface MoveRobotRightType extends Action {
    readonly type: typeof ActionKeys.MOVE_ROBOT_RIGHT_ACTION,
    readonly coordinate: ICoordinate
}

export interface ReportRobotLocationType extends Action {
    readonly type: typeof ActionKeys.REPORT_ROBOT_LOCATION_ACTION,
    readonly report?: string
}

export interface RobotErrorActionType extends Action {
    readonly type: typeof ActionKeys.ERROR_ROBOT_ACTION,
    readonly errorMessage?: string
}

export type RobotActionsTypes =
    UpdateRobotActionType |
    RotateRobotFaceType |
    MoveRobotUpType |
    MoveRobotDownType |
    MoveRobotLeftType |
    MoveRobotRightType |
    ReportRobotLocationType |
    RobotErrorActionType;