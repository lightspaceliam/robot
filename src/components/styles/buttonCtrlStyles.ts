/**
 * Button Ctrl Styles.
 */
import * as React from 'react';
import { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
    container: {
        margin: '4px'
    },
    notAllowed: {
        cursor: 'not-allowed' as React.CSSProperties['cursor'],
        backgroundColor: 'rgb(255,255,255)',
        '& svg': {
            fill: 'transparent'
        }
    }
});

export default styles;