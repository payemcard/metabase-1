import type { AppBuilders } from '@payem/platformer';
import { Action } from 'redux-store-generator';
import { sagas } from './sagas';

export const initClient = (builders: Partial<AppBuilders>) => {
    const { storeBuilder } = builders;

    console.log('init web client');

    if (!storeBuilder) {
        return;
    }

    storeBuilder
        .withReducers({
            _lastAction,
        })
        .withSagas(...sagas);
};

// https://github.com/reduxjs/redux/issues/580#issuecomment-133188511
export const _lastAction = (_state: any, action: Action) => {
    return action;
};
