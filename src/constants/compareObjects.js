const compareObjects = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
}

export { compareObjects }