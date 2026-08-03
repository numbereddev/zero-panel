import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get('session');
	event.locals.user = null;

	if (sessionToken) {
		const user = {
			username: 'Test'
		};

		if (user) {
			event.locals.user = user;
		}
	}

	event.locals.user = { username: 'Test' };

	return await resolve(event);
};
