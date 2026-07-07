import type { DevConsoleMessage, MessageStatus } from '../types/DevConsole'
import * as helper from '../helpers';
import { writable } from 'svelte/store';

export const devConsoleMessages = writable<DevConsoleMessage[]>([]);

export const devConsole = {
    message(status: MessageStatus, message: string) {
        devConsoleMessages.update((messages) => [
            ...messages,
            {
                id: helper.createId(),
                type: 'message',
                status,
                message
            }
        ]);
    },

    startFunction(functionName: string) {
        const id = helper.createId();

        devConsoleMessages.update((messages) => [
            ...messages,
            {
                id,
                type: 'function',
                functionName,
                status: 'running'
            }
        ]);

        return id;
    },

    finishFunction(id: number, status: 'success' | 'failed', result: unknown) {
        devConsoleMessages.update((messages) =>
            messages.map((message) => {
                if (message.id !== id || message.type !== 'function') {
                    return message;
                }

                return {
                    ...message,
                    status,
                    result: helper.formatResult(result)
                };
            })
        );
    },

    async run<T>(functionName: string, callback: () => T | Promise<T>) {
        const id = this.startFunction(functionName);

        try {
            const result = await callback();

            this.finishFunction(id, 'success', result);

            return result;
        } catch (error) {
            this.finishFunction(id, 'failed', error);

            throw error;
        }
    },

    clear() {
        devConsoleMessages.set([]);
    }
};