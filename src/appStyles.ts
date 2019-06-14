/**
 * App Styles.
 */
import * as React from 'react';
import { Theme } from '@material-ui/core/styles';

const colourDarkGray = 'rgb(51,51,51)';
const container = {
    paddingRight: "15px" as React.CSSProperties['paddingRight'],
    paddingLeft: "15px" as React.CSSProperties['paddingLeft'],
    marginRight: "auto" as React.CSSProperties['marginRight'],
    marginLeft: "auto" as React.CSSProperties['marginLeft'],
    // width: "100%" as React.CSSProperties['width'],
    // '@media (min-width: 576px)': {
    //     maxWidth: '540px' as React.CSSProperties['maxWidth'],
    // },
    // '@media (min-width: 768px)': {
    //     maxWidth: '720px' as React.CSSProperties['maxWidth'],
    // },
    // '@media (min-width: 992px)': {
    //     maxWidth: '960px' as React.CSSProperties['maxWidth'],
    // },
    // '@media (min-width: 1200px)': {
    //     width: 'auto' as React.CSSProperties['width'],
    //     maxWidth: 'none' as React.CSSProperties['maxWidth'],

    // }
};
const styles = (theme: Theme) => ({
    container: {
        ...container
    },
    headingOne: {
        fontWeight: 300 as React.CSSProperties['fontWeight'],
        width: '100%' as React.CSSProperties['width'],
        textAlign: 'center' as React.CSSProperties['textAlign'],
    },
    hr: {
        margin: '0 auto 20px',
        border: 'none' as React.CSSProperties['border'],
        borderTop: `0.08rem solid ${colourDarkGray}` as React.CSSProperties['borderTop'],
        width: '50%' as React.CSSProperties['width'],
    },
    table: {
        display: 'flex' as React.CSSProperties['display'],
        flexWrap: 'wrap' as React.CSSProperties['flexWrap'],
        width: '560px' as React.CSSProperties['width'],
        marginLeft: 'auto' as React.CSSProperties['marginLeft'],
        marginRight: 'auto' as React.CSSProperties['marginRight'],
    },
});

export default styles;