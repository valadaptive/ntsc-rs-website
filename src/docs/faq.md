---
layout: docs.njk
title: Frequently Asked Questions
eleventyNavigation:
  key: Frequently Asked Questions
  order: 1
---

## Does ntsc-rs include an audio effect?

No. I don't have any experience with audio processing, and others have already done a far better job than I could. If you're looking for a realistic emulation of VHS audio, I'd recommend [the Chow Tape Model effect](https://chowdsp.com/products.html#tape).

## Can I use ntsc-rs on Android, iOS, or the Web?

Unfortunately, none of those platforms are supported at the moment. It's unlikely that apps for iOS or Android will ever be released, but in the long term, it's possible that I'll make an ntsc-rs webapp.

## Is ntsc-rs like ntscQT?

Yes. I developed ntsc-rs as a "faster ntscQT", and added new features from there. ntscQT has since been officially discontinued, and ntsc-rs is one of its recommended replacements. To learn more, see [the migration guide](/docs/ntscqt-migration).