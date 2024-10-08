import { InlineKeyboard } from "grammy";
import { CONTACTS, CD_CONTACTS, isSNW, isRUB, isBTC, isDeposit, isWithdraw } from "../constants/index.js";
import { withSkipButton } from "./utils.js";

export function contactKeyboard(conversation) {
	const { operator, direction, currency } = conversation.session;

	const contactList = [];

	if (isSNW(operator)) {
		if (isDeposit(direction) && isBTC(currency)) {
			contactList.push(CONTACTS.DSPT);
		}

		if (!isRUB(currency)) {
			contactList.push(CONTACTS.GZPRM);
		}

		if (isRUB(currency)) {
			contactList.push(...CD_CONTACTS);
		}
	} else {
		if (isWithdraw(direction)) {
			if (isRUB(currency)) {
				contactList.push(CONTACTS.DSPT);
			}

			contactList.push(CONTACTS.CRPTX);
		}
	}

	return withSkipButton(
		InlineKeyboard.from(
			contactList.map(contact => [
				InlineKeyboard.text(
					Buffer.from(contact.value, "hex").toString(),
					contact.data ? Buffer.from(contact.data, "hex").toString() : undefined
				)
			])
		)
	);
}
