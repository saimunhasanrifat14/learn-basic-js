function one(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`one : ${result}`);
        callback(result)
    }, 100);
}
function two(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`two : ${result}`);
        callback(result)
    }, 200);
}
function three(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`three : ${result}`);
        callback(result)
    }, 300);
}
function four(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`four : ${result}`);
        callback(result)
    }, 400);
}
function five(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`five : ${result}`);
        callback(result)
    }, 500);
}
function six(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`six : ${result}`);
        callback(result)
    }, 600);
}
function seven(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`seven : ${result}`);
        callback(result)
    }, 700);
}
function eight(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`eight : ${result}`);
        callback(result)
    }, 800);
}
function nine(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`nine : ${result}`);
        callback(result)
    }, 900);
}
function ten(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`ten : ${result}`);
        callback(result)
    }, 1000);
}
function eleven(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`eleven : ${result}`);
        callback(result)
    }, 1100);
}
function twelve(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`twelve : ${result}`);
        callback(result)
    }, 1200);
}
function thireen(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`thireen : ${result}`);
        callback(result)
    }, 1300);
}
function fourteen(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`fourteen : ${result}` );
        callback(result)
    }, 1400);
}
function fifteen(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`fifteen : ${result}`);
        callback(result)
    }, 1500);
}
function sixteen(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`sixteen : ${result}`);
        callback(result)
    }, 1600);
}
function seventeen(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`seventeen : ${result}`);
        callback(result)
    }, 1700);
}
function eighteen(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`eighteen : ${result}`);
        callback(result)
    }, 1800);
}
function nineteen(callback, veluo) {
    setTimeout(() => {
        let result = veluo + 10;
        console.log(`nineteen : ${result}`);
        callback(result)
    }, 1900);
}
function twenty(callback, veluo) {
    setTimeout(() => {
        let result = veluo;
        console.log(`twenty : ${result}`);
        callback(result)
    }, 2000);
}
twenty((veluo) => {
    nineteen((veluo) => {
        eighteen((veluo) => {
            seventeen((veluo) => {
                sixteen((veluo) => {
                    fifteen((veluo) => {
                        fourteen((veluo) => {
                            thireen((veluo) => {
                                twelve((veluo) => {
                                    eleven((veluo) => {
                                        ten((veluo) => {
                                            nine((veluo) => {
                                                eight((veluo) => {
                                                    seven((veluo) => {
                                                        six((veluo) => {
                                                            five((veluo) => {
                                                                four((veluo) => {
                                                                    three((veluo) => {
                                                                        two((veluo) => {
                                                                            one((veluo) => {

                                                                            }, veluo)
                                                                        }, veluo)
                                                                    }, veluo)
                                                                }, veluo)
                                                            }, veluo)
                                                        }, veluo)
                                                    }, veluo)
                                                }, veluo)
                                            }, veluo)
                                        }, veluo)
                                    }, veluo)
                                }, veluo)
                            }, veluo)
                        }, veluo)
                    }, veluo)
                }, veluo)
            }, veluo)
        }, veluo)
    }, veluo)
}, 10)
