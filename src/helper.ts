export const debug = (message: string, ...args: any[]) => {
    if(process.env.ACTIONS_RUNNER_DEBUG === "true") {
        console.log(message, ...args);
    }
};

