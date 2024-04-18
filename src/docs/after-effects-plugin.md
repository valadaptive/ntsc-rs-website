---
layout: docs.njk
title: After Effects Plugin
eleventyNavigation:
  key: After Effects Plugin
  order: 3
---

ntsc-rs is available as an After Effects plugin. It currently does not work in Premiere--while it loads, it does nothing.

For a guide on building the plugin, see [the documentation in the code itself](https://github.com/valadaptive/ntsc-rs/blob/main/ae-plugin/README.md).

## Installation Path

After downloading the plugin, you'll need to copy the `ntsc-rs-ae.aex` file within the .zip to `C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\`.

## Usage

Once installed, the plugin should appear under the "Stylize" category.

{% image "src/assets/images/category-stylize.png", "The ntsc-rs effect appearing under the Stylize category in the \"Effects and Presets\" panel" %}

### Effect Order and Transforms

NTSC video itself is quite low-resolution--only 480 lines of vertical resolution. As such, you should apply it to 480p
footage for best results (both for performance reasons and correctness reasons).

In After Effects, this can be done by applying ntsc-rs via an adjustment layer atop a 480p composition.