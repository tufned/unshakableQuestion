const getRandomNum = (windowWidthOrHeight) => Math.floor(Math.random() * (windowWidthOrHeight - 100));

function getRandomPosition() {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	return {
		x: getRandomNum(windowWidth),
		y: getRandomNum(windowHeight)
	};
}

const isMobile = navigator.userAgentData.mobile;

const renderMobileScreen = () => container.innerHTML = "Не достпуно для перегляду на смартфоні";

/** encryption */

function encryptString(string) {
	const encrypted = CryptoJS.AES.encrypt(string, secretKey).toString();
	return encodeURIComponent(encrypted);
}

function decryptString(encryptedString) {
	const decryptedBase64 = decodeURIComponent(encryptedString);
	const decryptedBytes = CryptoJS.AES.decrypt(decryptedBase64, secretKey);
	return decryptedBytes.toString(CryptoJS.enc.Utf8);
}

function setSearchParam(encryptedString) {
	urlParams.set("question", encryptedString);
	const newUrl = window.location.pathname + "?" + urlParams.toString();
	window.history.replaceState(null, "", newUrl);
}
