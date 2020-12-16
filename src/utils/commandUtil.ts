import { exec } from 'child_process';

export async function execShellCommand(cmd: string) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
            }
            resolve(stdout? stdout : stderr);
        });
    });
}
