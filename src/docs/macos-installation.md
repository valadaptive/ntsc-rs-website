---
layout: docs.njk
title: Installing ntsc-rs on macOS
description: How to install and use ntsc-rs in macOS
eleventyNavigation:
  key: Installing ntsc-rs on macOS
  order: 6
---

Currently, ntsc-rs is not signed with an Apple developer certificate. This means that Gatekeeper will not allow the `.pkg` installer files to run.

In order to install ntsc-rs, be it the standalone application or plugins, first open the `.pkg` installer file for the distribution of ntsc-rs you want to install (application, OpenFX plugin, or After Effects plugin). It will display this dialog:

<img src="/assets/images/gatekeeper1.png" alt="An error message stating: &quot;ntsc-rs-macos-standalone.pkg&quot; cannot be opened because it is from an unidentified developer. macOS cannot verify that this app is free from malware." class="thumbnail" style="width: 260px" %}

After dismissing this dialog, open System Settings and go to the Privacy & Security tab. Scrolling most of the way down, you'll reach the Security section, where you can allow the installer to "Open Anyway":

<img src="/assets/images/gatekeeper2.png" alt="The System Settings window, with the Privacy & Security tab selected, and a notice about the installer displayed with an &quot;Open Anyway&quot; button" class="thumbnail" style="width: 715px" %}

Once you allow the installer itself to run, the actual application or plugin installed should work with no further Gatekeeper actions necessary. If it displays a similar error to the one above, you can find the same option in System Settings.