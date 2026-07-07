import { devConsole } from './handler/devConsole';

export const runIfDev = {
    function: {
        start:   devConsole.startFunction,
        finish:   devConsole.finishFunction,
        run:   devConsole.run
    },
    message:    devConsole.message
}
export * from './handler';
export * from './helpers';
export * from './types';