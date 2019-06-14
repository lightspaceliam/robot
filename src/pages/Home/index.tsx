/**
 * Home Page.
 */
import * as React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import IRobotState from '../../interfaces/IRobotState';
import Typography from '@material-ui/core/Typography';
import {
    updateRobotPosition,
    rotateRobotFace,
    moveRobotUp,
    moveRobotDown,
    moveRobotLeft,
    moveRobotRight,
    reportRobotLocation
} from '../../store/Actions/RobotActionCreators';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
    Android as Robot,
    Refresh,
    Star, List,
    KeyboardArrowUp,
    KeyboardArrowLeft,
    KeyboardArrowRight,
    KeyboardArrowDown
} from '@material-ui/icons';
import { RouteComponentProps } from 'react-router';
import ButtonCtrl from '../../components/ButtonCtrl';
import Unit from '../../components/Unit';
import {
    numberOfUnits,
    robotLength,
    unitLength
} from '../../_defaults/Constants'
import {
    calculateRobotOffset,
    calculateUnitOffset,
    calculateCannotClickNext,
    calculateCannotClickPrev,
    calculateCannotRotate
} from '../../_helpers/Calculator';

import styles from './homeStyles';
import ICoordinate from '../../interfaces/ICoordinate';

interface OwnProps {
    updateCoodinates: (x: number, y: number, f: number) => void,
    updateRotation: (coordinate: ICoordinate) => void,
    updateUp: (coordinate: ICoordinate) => void,
    updateDown: (coordinate: ICoordinate) => void,
    updateLeft: (coordinate: ICoordinate) => void,
    updateRight: (coordinate: ICoordinate) => void,
    reportLocation: (coordinate: ICoordinate) => void,
    robotState: IRobotState,
    updateRobotPosition: typeof updateRobotPosition,
    rotateRobotFace: typeof rotateRobotFace,
    moveRobotUp: typeof moveRobotUp,
    moveRobotDown: typeof moveRobotDown,
    moveRobotLeft: typeof moveRobotLeft,
    moveRobotRight: typeof moveRobotRight,
    reportRobotLocation: typeof reportRobotLocation
}

type PropsWithStyles =
    WithStyles<'container' | 'headingOne' | 'hr' | 'table' | 'tableInner' | 'buttonContainer' | 'upDown' | 'rightPlaceLeft' | 'buttonContainerInnner' | 'place' | 'controllPads' | 'reporter'>;

type HomeProps =
    OwnProps
    & PropsWithStyles
    & RouteComponentProps<{}>;

class Home extends React.Component<HomeProps, {}> {

    /**
     * Rotates the robot svg 90 degrees.
     * If the robot is currently at 270, it will be reset to 0.
     * 
     * @returns void.
     */
    updateRobotFace = (): void => {
        const { robotState } = this.props;
        this.props.updateRotation(robotState.coordinate);
    }

    /**
     * Place the robot at the start: (South / West) or reset Robot position.
     */
    place = (): void => {
        this.props.updateCoodinates(unitLength, unitLength, 0);
    }

    /**
     * Move the robot up the Y axis.
     */
    moveUp = (): void => {
        const { robotState } = this.props;
        this.props.updateUp(robotState.coordinate);
    }

    /**
     * Move the robot down the Y axis.
     */
    moveDown = (): void => {
        const { robotState } = this.props;
        this.props.updateDown(robotState.coordinate);
    }

    /**
     * Move the robot left on the X axis.
     */
    moveLeft = (): void => {
        const { robotState } = this.props;
        this.props.updateLeft(robotState.coordinate);
    }

    /**
     * Move the robot right on the X axis.
     */
    moveRight = (): void => {
        const { robotState } = this.props;
        this.props.updateRight(robotState.coordinate);
    }

    report = (): void => {
        const { robotState } = this.props;
        this.props.reportLocation(robotState.coordinate);
    }

    render() {
        const { classes, robotState } = this.props;

        return (
            <Grid container={true} className={classes.container}>
                <Grid item xs={12}>
                    <h1 className={classes.headingOne}>Robot Challenge</h1>
                </Grid>
                <Grid item className={classes.table} id='game-table'>
                    <div className={classes.tableInner}>
                        {Array.from(Array(numberOfUnits), (i, incrementor) => {
                            return (
                                <Unit key={`unit-${incrementor}`} />
                            );
                        })}

                        <Robot style={{
                            position: 'absolute',
                            left: (robotState.coordinate.x - (calculateUnitOffset() + calculateRobotOffset())),
                            bottom: (robotState.coordinate.y - (calculateUnitOffset() + calculateRobotOffset()))
                        }}
                            width={robotLength}
                            height={robotLength}
                            transform={`rotate(${robotState.coordinate.f})`} />
                    </div>
                </Grid>
                <div className={classes.buttonContainer}>
                    <div className={classes.buttonContainerInnner}>
                        <div className={classNames(classes.controllPads, classes.upDown, classes.place)}>
                            <ButtonCtrl onclick={this.place}
                                value='Place'
                                icon={<Star />}
                                disabled={false} />

                            <ButtonCtrl onclick={this.report}
                                value="Report robot's current location."
                                icon={<List />}
                                disabled={calculateCannotRotate(robotState.coordinate)} />

                            {/* <Fab aria-label='report button.'
                                title='Report robot location button.'
                                onClick={() => this.report()}>
                            </Fab> */}
                        </div>
                        <div className={classes.controllPads}>
                            <div className={classes.upDown}>
                                <ButtonCtrl onclick={this.moveUp}
                                    value='Move Up'
                                    icon={<KeyboardArrowUp />}
                                    disabled={calculateCannotClickNext(robotState.coordinate.y)} />
                            </div>
                            <div className={classes.rightPlaceLeft}>
                                <ButtonCtrl onclick={this.moveLeft}
                                    value='Move Left'
                                    icon={<KeyboardArrowLeft />}
                                    disabled={calculateCannotClickPrev(robotState.coordinate.x)} />

                                <ButtonCtrl onclick={this.updateRobotFace}
                                    value='Rotate'
                                    icon={<Refresh />}
                                    disabled={calculateCannotRotate(robotState.coordinate)} />

                                <ButtonCtrl onclick={this.moveRight}
                                    value='Move Right'
                                    icon={<KeyboardArrowRight />}
                                    disabled={calculateCannotClickNext(robotState.coordinate.x)} />
                            </div>
                            <div className={classes.upDown}>
                                <ButtonCtrl onclick={this.moveDown}
                                    value='Move Down'
                                    icon={<KeyboardArrowDown />}
                                    disabled={calculateCannotClickPrev(robotState.coordinate.y)} />
                            </div>
                        </div>
                    </div>
                </div>
                <Grid item xs={12}>
                    {robotState.report !== undefined &&
                        <Typography variant='body1'
                            className={classes.reporter}>
                            {robotState.report}
                        </Typography>
                    }
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    robotState: state.robotState
});

const mapDispatchToProps = (dispatch: any) => ({
    updateCoodinates: (x: number, y: number, f: number) => dispatch(updateRobotPosition(x, y, f)),
    updateRotation: (coordinate: ICoordinate) => dispatch(rotateRobotFace(coordinate)),
    updateUp: (coordinate: ICoordinate) => dispatch(moveRobotUp(coordinate)),
    updateDown: (coordinate: ICoordinate) => dispatch(moveRobotDown(coordinate)),
    updateLeft: (coordinate: ICoordinate) => dispatch(moveRobotLeft(coordinate)),
    updateRight: (coordinate: ICoordinate) => dispatch(moveRobotRight(coordinate)),
    reportLocation: (coordinate: ICoordinate) => dispatch(reportRobotLocation(coordinate))
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Home);
export default withStyles(styles)(connectedComponent);