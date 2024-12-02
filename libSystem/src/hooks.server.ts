import Pocketbase, { cookieSerialize } from 'pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.pb = new Pocketbase('http://127.0.0.1:8090');
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if (event.locals.pb.authStore.isValid) {
        event.locals.user = event.locals.pb.authStore.model;
    }


    let cookie = event.cookies.get("session_key")

    console.log("line 15:", cookie)

    const response = await resolve(event);


    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));
    response.headers.set('set-cookie', cookieSerialize("session_key", event.locals.mediaAPIKey))

    return response;
}

