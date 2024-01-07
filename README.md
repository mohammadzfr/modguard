# ModGuard

<p align="center">
  <img src="images/Full Logo.svg" />
</p>

An ML-aided chrome extension that filters toxicicity and blocks not-safe-for-work content. 

Built using TypeScript, TensorFlow.js, and [NSFWJS](https://github.com/infinitered/nsfwjs).

Bundled with Webpack

# Table of contents

- [ModGuard](#modguard)
- [Table of contents](#table-of-contents)
- [Usage](#usage)
- [Deploy](#deploy)

# Usage

When you load web pages, NSFW Filter will first hide all images and only show those classified as safe.

You can also change the tolerance of the filter to make it more or less strict

To customize the extension, click the icon in your extensions tab.
<p align="center">
  <img src="images/ModGuard Dark.png" />
  <img src="images/ModGuard Light.png" />
</p>


# Deploy

Install dependencies by running:

```sh
npm install
```

Then build the project:

```sh
npm run build
```

To run the tests:

```sh
npm run test
```

To run a development version with live reload, run:

```sh
npm run dev:chrome
```

Or open Google Chrome and open the Extension Management page by navigating to ```chrome://extensions``` or by opening Settings and clicking Extensions from the bottom left.

Enable Developer Mode by clicking the toggle switch next to Developer mode.

Click the "Load Unpacked" button and select the extension directory(```.../dist```).