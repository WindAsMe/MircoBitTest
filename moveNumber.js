while (true) {
    let num = Math.random(10000) + 1;
    let str = num.toString();
    basic.showString(str + ";");
    basic.showString(str[0] + ";");
    basic.showString(str[str.length - 1] + " ")
}
