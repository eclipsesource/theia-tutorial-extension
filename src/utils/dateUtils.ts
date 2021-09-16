export class DateUtils {
    public static currentTimestamp = (): string => {
        const today = new Date();
        const currentTimeStamp: string =
            today.getFullYear() +
            '_' +
            (today.getMonth() + 1) +
            '_' +
            today.getDate() +
            '_' +
            today.getHours() +
            '_' +
            today.getMinutes() +
            '_' +
            today.getSeconds();
        return currentTimeStamp;
    };
}