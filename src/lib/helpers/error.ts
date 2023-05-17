export function getErrorMsg(e: unknown) {
	if (typeof e === 'string') {
		return e;
	} else if (
		typeof e === 'object' &&
		e !== null &&
		'message' in e &&
		typeof e.message === 'string'
	) {
		return e.message;
	} else {
		return 'Something went wrong';
	}
}
