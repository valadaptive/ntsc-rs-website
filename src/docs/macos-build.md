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
2. Install [brew](https://brew.sh/) and use it to install GStreamer:
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
4. Add the GStreamer tooling to your PATH:
   ```
   export PATH=$PATH:/Library/Frameworks/GStreamer.framework/Versions/1.0/bin
   export PKG_CONFIG_PATH=/Library/Frameworks/GStreamer.framework/Versions/1.0/lib/pkgconfig
   ```
5. Build the standalone app and/or the OpenFX plugin:
   ```
   # To build the standalone app (output will be in the `build` folder)
   cargo xtask macos-bundle --release

   # To build the OpenFX plugin (output will be in `crates/openfx-plugin/build`)
   cargo xtask build-ofx-plugin --macos-universal --release
   ```

If you run into any problems, feel free to ask for help in [this GitHub issue thread](https://github.com/valadaptive/ntsc-rs/issues/36) (though note that the instructions provided there are outdated, and this documentation supersedes it).
