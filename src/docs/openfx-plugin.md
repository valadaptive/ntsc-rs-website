---
layout: docs.njk
title: OpenFX Plugin
eleventyNavigation:
  key: OpenFX Plugin
  order: 2
---

ntsc-rs is available as an OpenFX plugin. This means that you can use it in a wide variety of video editing software, including DaVinci Resolve, Hitfilm, and Vegas. Here's a quick guide on how to install and use the plugin.

For a guide on building the plugin, see [the documentation next to the crate in the code itself](https://github.com/valadaptive/ntsc-rs/blob/main/crates/openfx-plugin/README.md).

## Installation Path

After downloading the appropriate OpenFX plugin for your platform, you'll need to install it to the correct path.

On Windows, you'll need to copy the `NtscRs.ofx.bundle` folder to `C:\Program Files\Common Files\OFX\Plugins`.
On Linux, you'll need to copy the `NtscRs.ofx.bundle` folder to `/usr/OFX/Plugins/`.

You'll need to copy the folder itself, *not* its contents!

## Usage

Once installed, the plugin should appear under the "Filter" category. In software that groups plugins by vendor instead of by category, such as DaVinci Resolve, it will be under "NtscRs".

{% image "src/assets/images/category-filter.png", "The ntsc-rs effect appearing under the Filter category in an effect menu" %}

### Effect Order and Transforms

NTSC video itself is quite low-resolution--only 480 lines of vertical resolution. As such, you should apply it to 480p
footage for best results (both for performance reasons and correctness reasons).

When doing so, you should be aware of your timeline resolution, and whether effects like ntsc-rs are applied before or
after its recipient video clip gets resized to fit the timeline.

If, for example, you place a 480p clip in a 1080p timeline, and add the ntsc-rs effect to it, things could go one of two
ways, depending on what editing software you use:

- Your editing software applies the ntsc-rs effect to the 480p clip, and then scales it up to 1080p to fit the timeline.
  All is well.
- Your editing software *first* scales the 480p clip up to 1008p, *then* applies ntsc-rs. This will produce sub-par,
  possibly unintended results, and ntsc-rs will run much slower because it has to process a 1080p clip.

In particular, effects applied to a clip in DaVinci Resolve behave the second way. Don't apply the ntsc-rs effect to a
low-resolution clip in a high-resolution timeline! Instead, either create a new timeline that matches your clip's
resolution and apply the effect there, or apply the effect in the Fusion panel, where it will be applied prior to
scaling the clip.

### sRGB and Gamma

OpenFX doesn't specify the color space that effects should operate in. Some editing software (e.g. Natron) performs all
effect processing in linear space, whereas other software (e.g. Resolve) seems to do it in sRGB space.

ntsc-rs expects its input to be in sRGB space. If it isn't, the output will appear incorrect--dark areas of the image
will appear to "glow" and become oversaturated.

To fix this, an "Apply sRGB gamma" setting is available in the OpenFX version of the plugin only, at the very bottom of the settings. Enabling this checkbox will make ntsc-rs assume that the input is in linear space and apply the sRGB transformation itself.

Long story short:
- If you use ntsc-rs and notice that dark, desaturated areas of the image become brighter and more saturated, while the
  rest of the image appears more washed-out, check the "Apply sRGB Gamma" box at the bottom of the effect controls.
- If you use ntsc-rs and notice that dark areas of the image become even darker and blown-out, *un*check the "Apply sRGB
  Gamma" box at the bottom of the effect controls.