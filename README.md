<h1 align="center">NexOracle Rest APIs</h1>

<p align="center">
  <img src="https://img.shields.io/npm/v/@nexoracle/api" alt="NPM Version">
  <img src="https://img.shields.io/badge/Made%20with-%E2%9D%A4-red" alt="Made with Love">
  <img src="https://img.shields.io/badge/Open%20Source-%F0%9F%8C%90-blue" alt="Open Source">
</p>

<p align="center">
  A hub of RESTful APIs for developers, providing 600+ powerful endpoints across multiple categories.<br>
  From downloaders and AI tools to image processing, games, and converters - everything you need to elevate your applications to new heights.
</p>

## Features

- **Developer-Friendly** - Intuitive endpoints with clear documentation
- **Extensive Collection** - 600+ ready-to-use REST APIs across 20+ categories
- **Affordable Pricing** - Competitive rates with many free endpoints
- **Blazing Fast** - Optimized for speed and reliability
- **Seamless Integration** - Works with any programming language or framework
- **Complete Documentation** - Detailed guides and examples for every API

## API Categories

NexOracle offers APIs across numerous categories including:

- **Islamic** - Quran, Surah, Hadith and more
- **News** - Latest news endpoints of many platforms
- **Downloader** - Download content from many platforms
- **AI Tools** - Many ai models and llms
- **Image Processing** - Filters, effects, and more
- **Stalking** - Social media data extraction
- **Searching** - Advanced search apis across platforms
- **Converters** - Format and convert your data
- **And many more!**

Explore our complete catalog at [api.nexoracle.com/dashboard](https://api.nexoracle.com/dashboard)

## Getting Started with NexOracle Rest APIs

<details>
<summary><b>Click to expand</b></summary>

**Welcome to NexOracle Rest APIs, your one-stop solution for seamless API integrations! Our extensive collection of APIs is designed for developers building apps, businesses enhancing services, or tech enthusiasts experimenting with new ideas.**

### Step 1: Sign Up

- Create an account to access our API dashboard. Signing up is quick and easy, providing instant access to hundreds of powerful APIs.

### Step 2: Get Your API Key

- After signing up, navigate to your Profile by clicking on the avatar in the top right to get your unique API key for authenticating requests.

### Step 3: Choose an API

- Browse our comprehensive API library and select the API that fits your needs. Each API includes detailed documentation with endpoints, parameters, and response formats.

### Step 4: Make Your First API Call

- With your API key in hand, you're ready to start! All our APIs follow REST principles and are designed for simple, intuitive integration.

### Step 5: Integrate the API

- Easily incorporate our APIs into your existing systems using the provided code examples for popular languages like JavaScript, Python, PHP and more.

### Step 6: Upgrade for More Features

- For extensive usage and advanced features, upgrade to a PRO or VIP plan offering higher limits, faster response times, and premium feature access.
</details>

---

<h1 align="center">Official NPM Library: @nexoracle/api</h1>

<p align="center">
  Our official SDK provides a streamlined way to interact with NexOracle APIs in JavaScript environments.<br> The npm is currently in development.
</p>

### Installation

```bash
# NPM
npm install @nexoracle/api

# Yarn
yarn add @nexoracle/api

# PNPM
pnpm add @nexoracle/api

# BUN
bun add @nexoracle/api
```

### Browser (CDN)

```html
<!-- Global script -->
<script src="https://cdn.jsdelivr.net/npm/@nexoracle/api@1.0.2/dist/browser/index.global.js"></script>
<script>
  const { setConfig, islamic, downloader } = api; // Access functions from global api object
  setConfig({ apiKey: "your_api_key_here" });
</script>

<!-- ES Module -->
<script type="module">
  import { setConfig, islamic, downloader } from "https://cdn.jsdelivr.net/npm/@nexoracle/api@1.0.2/dist/browser/index.mjs";
  setConfig({ apiKey: "your_api_key_here" });
</script>
```

CommonJS is also available:

```
https://cdn.jsdelivr.net/npm/@nexoracle/api@1.0.2/dist/browser/index.cjs
```

### Configuration

Set up the SDK at the top of your main file:

```js
const { setConfig } = require("@nexoracle/api");

setConfig({
  apiKey: "your_api_key_here",
  apiUrl: "https://api.nexoracle.com", // Optional, default is already set
});
```

**Notes:**

- Call **`setConfig()` only once** — it sets the global configuration used in all requests
- Pass **`apiKey`** parameter in setConfig - it will be used globally when making request
- You can **override the global apiKey** by passing `apikey` directly in API params
- The **`apiUrl` parameter is optional** — it defaults to `https://api.nexoracle.com` but can be overridden if needed

## Usage Examples

<details>
<summary><b>Example 1 — (JSON)</b></summary>

```js
const { islamic, downloader } = require("@nexoracle/api");

async function main() {
  // Pass true as the last parameter to get the direct result object
  const downloadAPK = await downloader.apk({ query: "pubg" }, true);
  console.log("APK Data:", JSON.stringify(downloadAPK, null, 2));

  // Without true parameter, get the complete response including metadata
  const fullResponse = await downloader.apk({ query: "pubg" });
  console.log("Full response:", fullResponse);

  // For the apis that don't require any param, you can skip their param when using
  const surahDetails = await islamic.surahDetails(); // you can pass the true param, if u want result object only
  console.log("Surah Details:", JSON.stringify(surahDetails, null, 2));
}
main();
```

</details>

<details>
<summary><b>Example 2 — (Buffer + Save to File)</b></summary>

```js
const fs = require("fs");
const { islamic } = require("@nexoracle/api");

async function main() {
  const quranAudio = await islamic.alQuran({ query: 1 });

  if (quranAudio instanceof ArrayBuffer) {
    const buffer = Buffer.from(quranAudio);
    fs.writeFileSync("surah1.mp3", buffer);
    console.log("✅ Saved as surah1.mp3");
  }
}
main();
```

</details>

<details>
<summary><b>Example 3 — Image Processing (Wanted Poster)</b></summary>

```js
const fs = require("fs");
const { imageProcessing } = require("@nexoracle/api");

async function main() {
  const imageUrl = "https://i.pinimg.com/736x/d7/bf/77/d7bf77878131295fabd6a530d1944222.jpg";
  const buffer = await imageProcessing.wanted({ img: imageUrl });

  if (buffer instanceof ArrayBuffer) {
    fs.writeFileSync("wanted.jpg", Buffer.from(buffer));
    console.log("✅ Saved as wanted.jpg");
  }
}
main();
```

</details>

<details>
<summary><b>Example 4 — Direct API Fetch (with fetchApi helper)</b></summary>

The **`fetchApi` helper** is included to make raw API requests:

```js
const { fetchApi } = require("@nexoracle/api");

async function main() {
  // JSON request - passing true to get direct result object
  const downloadAPK = await fetchApi.json("https://api.nexoracle.com/downloader/apk", { apikey: "your_api_key_here", query: "pubg" }, true);
  console.log("APK Data: " + JSON.stringify(downloadAPK, null, 2));

  // Buffer request (for images, audio, files etc)
  const img = "https://i.pinimg.com/736x/d7/bf/77/d7bf77878131295fabd6a530d1944222.jpg";
  const imageBuffer = await fetchApi.buffer("https://api.nexoracle.com/image-processing/wanted", { apikey: "your_api_key_here", img });

  const buffer = Buffer.from(imageBuffer);
  console.log("Image Buffer: " + buffer);

  // Use the buffer as needed...
}
main();
```

**Note:** The `fetchResultOnly` parameter (third parameter in `fetchApi.json`) when set to `true` returns only the result object, skipping metadata. Use this for cleaner responses when you don't need status information.
You need to provide apikey parameter when using fetchApi function.

</details>

<details>
<summary><b>Example 5 — Using with External HTTP Libraries</b></summary>

If you prefer using your own HTTP client:

```js
const axios = require("axios");

(async () => {
  const res = await axios.get("https://api.nexoracle.com/downloader/apk?apikey=your_api_key_here&query=pubg");
  console.log(res.data);
})();
```

</details>

## Developer Notes

- This SDK uses **built-in `fetch`** - no external dependencies required
- The `fetchApi` helper is optimized for the [api.nexoracle.com](https://api.nexoracle.com) response format
- Works in Node.js and browsers with full TypeScript support
- All endpoints return promises that resolve to either JSON data or ArrayBuffer (for binary responses)
- **For API Providers**: If you reuse this repo to create your own npm, you'll need to modify the [**fetchApi**](https://github.com/nexoracle/api/blob/eb895c92228c1e9f10ad42fac9e03b6fa03ed3ad/lib/functions/index.ts#L32) function to match your apis response structure. The current implementation is specifically designed for NexOracle's API response format.

## Contributions

We welcome contributions to improve both our APIs and SDK! Feel free to open issues, submit pull requests, or suggest new API endpoints.

## License

[MIT LICENSE](https://github.com/nexoracle/api/blob/main/LICENSE)
