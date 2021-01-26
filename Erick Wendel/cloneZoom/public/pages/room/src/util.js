
class Util {
    static sleep(timeInMs) {
        return new Promise(callBack => setTimeout(callBack, timeInMs))
    }
}