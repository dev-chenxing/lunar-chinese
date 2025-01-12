import ansi from "ansi-colors";
import { ChineseCalendar } from "./dist/index.cjs";

const c = new ChineseCalendar(1948, 8, 24);

const tests = {
    "c.getMonth({lang: 'en'})": "August",
    "c.getMonth({lang: 'zh'})": "八月",
    "c.getDay({lang: 'zh'})": "星期二",
    "c.getDay({lang: 'en'})": "Tuesday",
    "c.getDate()": 24,
};

Object.keys(tests).forEach((i) => {
    const result = eval(i);
    const expected = tests[i];
    if (result == expected) console.log(`${ansi.green("✓")} ${ansi.gray(i)} => ${ansi.green(result)}`);
    else console.log(`${ansi.red("✘")} ${ansi.gray(i)} => ${ansi.red(result)} (${ansi.green(expected)})`);
});
console.log();
