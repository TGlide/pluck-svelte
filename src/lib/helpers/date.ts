export function formatDate(date: Date | string): string {
	if (typeof date === 'string') {
		date = new Date(date);
	}

	// Check if today
	if (date.toDateString() === new Date().toDateString()) {
		return 'Today';
	}

	return date.toLocaleDateString('en-UK', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
