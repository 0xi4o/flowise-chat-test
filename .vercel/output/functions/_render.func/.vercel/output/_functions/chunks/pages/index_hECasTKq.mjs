import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, h as addAttribute } from '../astro_KmqU8HSc.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Astro</title>", `</head> <body> <h1 style="margin-top: 60px">Astro</h1> <div>
Go ahead and give the chatbot a shot. Click on the chat widget and
			input a hard concept. Here are some examples:
<ul class="ml-7 list-disc"> <li>AI</li> <li>Fermi's Paradox</li> <li>Occam's Razor</li> <li>Laws of Thermodynamic</li> </ul> </div> <div>Have fun!</div> <script type="module">
			// import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
            import Chatbot from './web.js'
			Chatbot.init({
				// chatflowid: "991d8f9e-70f6-4b3a-a755-66f8fdc1eece",
				// chatflowid: "6881e28a-2f63-4625-82ad-0f2f0591a5e2",
                chatflowid: "dc7dda8d-fc2b-4b4b-a1cc-aa070fe4fadc",
				// apiHost: "http://localhost:3000",
				// apiHost: "https://flowise-main.up.railway.app",
				apiHost: "https://flowise-ui-cwc5.onrender.com",
			})
		<\/script> </body> </html>`])), addAttribute(Astro2.generator, "content"), renderHead());
}, "/home/i4o/Experiments/flowise-chat-test/src/pages/index.astro", void 0);

const $$file = "/home/i4o/Experiments/flowise-chat-test/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
