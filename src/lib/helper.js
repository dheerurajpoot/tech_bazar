export function convertGoogleDriveLink(shareableLink) {
	// Extract the FILE_ID from the shareable link
	const match = shareableLink.match(/\/d\/(.+?)\/view/);
	if (match && match[1]) {
		return `https://drive.google.com/uc?id=${match[1]}`;
	} else {
		console.error("Invalid Google Drive link:", shareableLink);
		return null;
	}
}
