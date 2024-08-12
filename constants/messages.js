import {
	startKeyboard,
	operatorKeyboard,
	directionKeyboard,
	currencyKeyboard,
	contactKeyboard,
	clientKeyboard,
	rateKeyboard,
	rateСrossKeyboard,
	rateUsdtKeyboard,
	walletKeyboard,
	codeKeyboard,
	linkKeyboard,
	detailsKeyboard
} from "../keyboards/index.js";

export const MESSAGES = {
	forbidden: {
		text: "❌"
	},
	start: {
		text: "🧐 Меню",
		keyboard: startKeyboard
	},
	operator: {
		text: "🫡 Исполнитель",
		keyboard: operatorKeyboard
	},
	direction: {
		text: "🔄 Направление",
		keyboard: directionKeyboard
	},
	currency: {
		text: "🫰 Валюта",
		keyboard: currencyKeyboard
	},
	contact: {
		text: "🥸 Контакт",
		keyboard: contactKeyboard
	},
	client: {
		text: "😎 Заказчик",
		keyboard: clientKeyboard
	},
	amount: {
		text: "🤑 Сумма"
	},
	rate: {
		text: "💹 Курс",
		keyboard: rateKeyboard
	},
	rateCross: {
		text: "💹 Кросс-курс",
		keyboard: rateСrossKeyboard
	},
	rateUsdt: {
		text: "💹 Курс за USDT",
		keyboard: rateUsdtKeyboard
	},
	wallet: {
		text: "👛 Кошелек",
		keyboard: walletKeyboard
	},
	link: {
		text: "🔗 Ссылка",
		keyboard: linkKeyboard
	},
	code: {
		text: "🔑 Код",
		keyboard: codeKeyboard
	},
	details: {
		text: "💳 Реквизиты",
		keyboard: detailsKeyboard
	}
};
