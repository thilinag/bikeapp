export const parseHeartRate = value => {
    // In Chrome 50+, a DataView is returned instead of an ArrayBuffer.
    value = value.buffer ? value : new DataView(value);
    return value.getUint8(1);
}