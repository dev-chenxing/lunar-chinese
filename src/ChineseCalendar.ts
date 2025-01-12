import { MONTHS_EN, MONTHS_ZH } from "./constants"

export class ChineseCalendar {
	private readonly _date: Date
	constructor(year: number | undefined, month: number | undefined, date: number | undefined) {
		const argc = arguments.length
		if (argc == 0) this._date = new Date();
		else {
			year = year as number;
			const monthIndex = argc > 1 ? (month as number) - 1 : 1
			date = argc > 2 ? date : 1
			this._date = new Date(year, monthIndex, date);
		}
	}
	getMonth({ lang = "en", }: { lang: "en" | "zh" }): string {
		if (lang == "zh")
			return MONTHS_ZH[this._date.getMonth()];
		else
			return MONTHS_EN[this._date.getMonth()];
	}
}
