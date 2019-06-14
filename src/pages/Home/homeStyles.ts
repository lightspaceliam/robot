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
};
const styles = (theme: Theme) => ({
    container: {
        ...container,
        position: 'relative' as React.CSSProperties['position']
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
    tableInner: {
        width: '560px' as React.CSSProperties['width'],
        position: 'relative' as React.CSSProperties['position']
    },
    buttonContainer: {
        width: '100%',
        marginTop: '30px'
    },
    buttonContainerInnner: {
        width: '560px',
        margin: '0 auto'
    },
    controllPads: {
        width: '50%',
        float: 'left' as React.CSSProperties['float'],
        height: '200px'
    },
    place: {
        alignItems: 'center'
    },
    upDown: {
        display: 'flex',
        justifyContent: 'center'
    },
    rightPlaceLeft: {
        display: 'flex',
        justifyContent: 'center'
    },
    reporter: {
        textAlign: 'center' as React.CSSProperties['textAlign'],
        backgroundColor: 'rgb(54,54,54)',
        padding: '20px',
        color: 'rgb(255,255,255)'
    }
});

export default styles;