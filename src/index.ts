import { createPlaceholder } from "./createPlaceholder";

export interface Env {}

const DOCTYPE = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`;
const DAY = 60 * 60 * 24;

const cache = caches.default;

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
    const hit = await cache.match(request);

    if (hit) {
      return hit;
    }

    const url = new URL(request.url);
    const name = decodeURIComponent(url.pathname.split("/")[1]);

    const svg = await createPlaceholder({
      name,
    });

    const headers = new Headers();
    headers.set("Content-Type", "image/svg+xml");
    headers.set("Cache-Control", `public, max-age=${7 * DAY}`);

    const response = new Response([DOCTYPE, svg].join("\n"), {
      headers,
    });

    await cache.put(request, response);

		return new Response(response.body, response);
	},
};
