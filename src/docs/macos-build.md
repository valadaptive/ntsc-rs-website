---
layout: docs.njk
title: Building ntsc-rs for macOS
eleventyNavigation:
  key: Building ntsc-rs for macOS
  order: 4
---

Official macOS builds for ntsc-rs are in the works. For now, here's how to build the standalone application and OpenFX plugin yourself in [the terminal](https://support.apple.com/guide/terminal/welcome/mac):

1. Install [rustup](https://rustup.rs/) and use it to install the latest stable version of Rust:
   ```
   rustup install stable
   ```
2. Install [brew](https://brew.sh/) and use it to install GStreamer (only necessary for the standalone application):
   ```
   brew install --cask gstreamer-runtime
   brew install --cask gstreamer-development
   ```
3. Clone the ntsc-rs Git repository, making sure to include submodules, and switch to the `macos` branch:
   ```
   git clone --recurse-submodules https://github.com/valadaptive/ntsc-rs.git
   cd ntsc-rs
   git checkout macos
   ```
4. Add the GStreamer tooling to your PATH (only necessary for the standalone application):
   ```
   export PATH=$PATH:/Library/Frameworks/GStreamer.framework/Versions/1.0/bin
   export PKG_CONFIG_PATH=/Library/Frameworks/GStreamer.framework/Versions/1.0/lib/pkgconfig
   ```
5. Build the standalone app, OpenFX plugin, and/or After Effects plugin:
   ```
   # To build the standalone app (output will be in the `build` folder)
   cargo xtask macos-bundle --release

   # To build the OpenFX plugin (output will be in `crates/openfx-plugin/build`)
   cargo xtask build-ofx-plugin --macos-universal --release

   # To build the After Effects plugin (output will be in the `build` folder)
   # This is untested, and is not guaranteed to build a working plugin.
   cargo xtask macos-ae-plugin --macos-universal --release
   # Code signing *may* be necessary for After Effects to load the plugin.
   codesign --options runtime --timestamp -strict --sign - build/ntsc-rs.plugin
   ```

If you run into any problems, feel free to ask for help in [this GitHub issue thread](https://github.com/valadaptive/ntsc-rs/issues/36) (though note that the instructions provided there may be outdated, and this documentation supersedes it).
