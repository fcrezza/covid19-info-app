function countryCodeToEmoji(countryCode) {
	const emoji = countryCode.replace(/./g, (char) =>
		String.fromCodePoint(char.charCodeAt(0) + 127397),
	)

	return emoji
}

export default countryCodeToEmoji
