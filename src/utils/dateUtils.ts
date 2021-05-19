export class DateUtils {
    public static currentTimestamp = () => {
        let today = new Date();
        let currentTimeStamp: string =
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