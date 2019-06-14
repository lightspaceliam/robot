/**
 * Unit.
 */
import * as React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import styles from './styles/unitStyles';

type PropsWithStyles =
    WithStyles<'container'>;

type UnitProps =
    PropsWithStyles;

const Unit: React.SFC<UnitProps> = (props) => {

    const { classes } = props;
    return (
        <Grid className={classes.container}>
        </Grid>
    );
}

export default withStyles(styles)(Unit);