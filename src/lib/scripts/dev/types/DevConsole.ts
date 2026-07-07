export type MessageStatus = 'success' | 'info' | 'warning' | 'failed' | 'running';
export type FunctionStatus = 'running' | 'success' | 'failed';

export type DevConsoleMessage =
    | {
        id: number;
        type: 'message';
        status: MessageStatus;
        message: string;
    }
    | {
        id: number;
        type: 'function';
        functionName: string;
        status: FunctionStatus;
        result?: string;
    };