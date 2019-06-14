/**
 * Button Ctrl.
 */
import * as React from 'react';
import classNames from 'classnames';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import styles from './styles/buttonCtrlStyles';

interface OwnProps {
    onclick: () => void,
    value: string;
    icon: object;
    disabled: boolean;
}

type PropsWithStyles =
    WithStyles<'container' | 'notAllowed'>;

type ButtonCtrlProps =
    OwnProps
    & PropsWithStyles;

const ButtonCtrl: React.SFC<ButtonCtrlProps> = (props) => {

    const { classes, value, onclick, icon, disabled } = props;

    function update(): void {
        if (disabled === false) {
            onclick();
        }
    }
    return (
        <Fab aria-label={`button-${value}`}
            className={classNames(classes.container, `${disabled === true ? classes.notAllowed : ''}`)}
            title={value}
            onClick={() => update()}>
            {icon}
        </Fab>
    );
}

export default withStyles(styles)(ButtonCtrl);