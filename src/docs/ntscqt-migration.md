---
layout: docs.njk
title: Migrating from ntscQT
eleventyNavigation:
  key: Migrating from ntscQT
  order: 7
---

## Why migrate from ntscQT?

I originally contributed some (still unmerged) improvements to ntscQT, then developed ntsc-rs as a Rust rewrite of it. ntscQT is no longer maintained, and ntsc-rs is one of the recommended alternatives.

The biggest reason, and the one touted on the main page, is speed. In one test, ntscQT took 1 minute, 36 seconds to render a 30-second 480p video. ntsc-rs (on an 8-core CPU) rendered the same video with the same settings in 4.5 seconds. That's a **20x speed improvement!** On CPUs with fewer cores, you may not see as much of an improvement, but it should still be faster by around an order of magnitude.

Another reason is usability--aside from the speed benefits allowing a live preview, I've put work into making ntsc-rs much more pleasant to use. Of particular note is the **controls**: ntscQT has less flexibility in the effect options, and some of them are even hidden and cannot be changed or viewed by the user, even though the "randomize" button does change them!

## Using and adapting ntscQT presets

ntsc-rs v0.9.1 and up supports loading ntscQT presets directly. Click the "📝" button in the bottom left of the ntscQT window to copy your settings, and paste them into ntsc-rs. You can also load them directly from files (just like ntsc-rs presets) in ntsc-rs.

The mapping is not one-to-one. Some settings in ntsc-rs behave differently from ntscQT, and some things are implemented differently and approximated when translating the settings into the ntsc-rs format. You may need to make further adjustments.

Note that one default setting in ntscQT is **inaccurate**: the "Scanline phase shift" setting. For real NTSC footage, it is always 180 degrees. However, most ntscQT presets have it set to 90 degrees. **For the best accuracy, change the "Scanline phase shift" setting to "180 degrees" after importing your ntscQT preset!**
