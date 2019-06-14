/**
 * Robot Reducer.
 */
import ICoordinate from '../../interfaces/ICoordinate';
import IRobotState from '../../interfaces/IRobotState';
import RobotActionKeys from '../Actions/RobotActionKeys';
import { RobotActionsTypes } from '../Actions/RobotActionTypes';
import { startPoint } from '../../_defaults/Constants';

/**
 * Initial State.
 */
const initialState: IRobotState = {
    coordinate: { x: startPoint, y: startPoint, f: 0 } as ICoordinate,
    errorMessage: undefined
}

/**
 * Reducer.
 */
export function robotReducer(
    state = initialState,
    action: RobotActionsTypes
): IRobotState {

    switch (action.type) {
        case RobotActionKeys.ROTATE_ROBOT_FACE_ACTION:
        case RobotActionKeys.MOVE_ROBOT_UP_ACTION:
        case RobotActionKeys.MOVE_ROBOT_DOWN_ACTION:
        case RobotActionKeys.MOVE_ROBOT_LEFT_ACTION:
        case RobotActionKeys.MOVE_ROBOT_RIGHT_ACTION:
        case RobotActionKeys.UPDATE_ROBOT_ACTION:
            return {
                ...state,
                coordinate: action.coordinate
            };
        case RobotActionKeys.REPORT_ROBOT_LOCATION_ACTION:
            return {
                ...state,
                report: action.report
            };
        case RobotActionKeys.ERROR_ROBOT_ACTION:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
};