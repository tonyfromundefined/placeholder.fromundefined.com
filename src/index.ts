import { createPlaceholder } from "./createPlaceholder";

export interface Env {}

const doctype = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`;

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
    const url = new URL(request.url)
    const name = decodeURIComponent(url.pathname.split("/")[1])

    const svg = await createPlaceholder({
      name,
    })

    const headers = new Headers()
    headers.set("Content-Type", "image/svg+xml")

		return new Response([doctype, svg].join("\n"), {
      headers,
    });
	},
};
