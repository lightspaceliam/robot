import * as React from 'react';
import { create } from 'react-test-renderer';
import ButtonCtrl from './ButtonCtrl';
import Camera from '@material-ui/icons/Camera';

describe('1st Test', () => {

    const func = (): void => { }
    const value: string = 'test';
    test('T', () => {
        const component = create(
            <ButtonCtrl
                onclick={func}
                value={value}
                icon={<Camera />}
                disabled={false} />
        );

        const instance = component.getInstance();
        expect(instance === null).toBeFalsy();
        if (instance !== null) {
            expect(instance.props.value).toBe(value);
            expect(instance.props.icon).toEqual(<Camera />);
            expect(instance.props.disabled).toBeFalsy();
        }

    })
})
