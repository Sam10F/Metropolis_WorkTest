export const getInitialsFromString = (srt: string): string => {
    return srt
        .split(" ")
        .map((n) => n[0])
        .join("");
};
