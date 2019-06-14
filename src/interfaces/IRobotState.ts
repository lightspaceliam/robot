import ICoordinate from './ICoordinate';

export default interface IRobotState {
    coordinate: ICoordinate,
    errorMessage?: string | undefined,
    report?: string | undefined
}