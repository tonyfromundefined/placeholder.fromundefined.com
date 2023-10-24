import { createPlaceholder } from "./createPlaceholder";

export interface Env {}

const DOCTYPE = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`;
const DAY = 60 * 60 * 24;

const cache = caches.default;

export default {
	async fetch(request: Request): Promise<Response> {
    const hit = await cache.match(request);

    if (hit) {
      return hit;
    }

    const url = new URL(request.url);
    const name = decodeURIComponent(url.pathname.split("/")[1]);

    const svg = await createPlaceholder({
      name,
    });

    const body = [DOCTYPE, svg].join("\n");

    const headers = new Headers();
    headers.set("Content-Type", "image/svg+xml");
    headers.set("Cache-Control", `public, max-age=${7 * DAY}`);

    await cache.put(request, new Response(body, {
      headers,
    }));

		return new Response(body, {
      headers,
    });
	},
};
