/**
 * Layout.
 */
import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

type LayoutProps =
    RouteComponentProps<any>;

const Layout: React.FC<LayoutProps> = (props) => {

    const { children } = props;

    return (
        <div>
            {children}
        </div>
    );
}

export default withRouter(Layout);