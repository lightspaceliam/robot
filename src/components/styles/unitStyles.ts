/**
 * Unit Styles.
 */
import * as React from 'react';
import { Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
    container: {
        width: '100px',
        height: '100px',
        border: '1px solid rgb(154,154,154)',
        borderRadius: '10px',
        margin: '1px',
        padding: '4px',
        boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
        float: 'left' as React.CSSProperties['float'],
    }
});

export default styles;