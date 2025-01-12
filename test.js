import ansi from "ansi-colors";
import { ChineseCalendar } from "./dist/index.cjs";

const c = new ChineseCalendar(2025, 1, 6);

const tests = { "c.getMonth({lang: 'en'})": "January", "c.getMonth({lang: 'zh'})": "一月" };

Object.keys(tests).forEach((i) => {
    const result = eval(i);
    const expected = tests[i];
    if (result == expected) console.log(`${ansi.green("✓")} ${ansi.gray(i)} => ${ansi.green(result)}`);
    else console.log(`${ansi.red("✘")} ${ansi.gray(i)} => ${ansi.red(result)} (${ansi.green(expected)})`);
});
console.log()
