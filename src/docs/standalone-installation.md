---
layout: docs.njk
title: Installation
eleventyNavigation:
  key: Installation
  parent: Standalone Application
  order: 0
---

After downloading the correct version of ntsc-rs for your platform, you can run it by following the steps for your platform:

<h2 id="installation-windows">Windows</h2>

The GUI requires <a href="https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022">the Microsoft Visual C++ Redistributable</a>. Since a lot of other software does too, you probably already have it installed, but if you get an error about VCRUNTIME140.dll being missing, you need to install it.

After downloading the ZIP file, extract the <em>entire contents</em> of the ZIP file to a folder of your choice. If you don't do this, the application won't run.

To run the application, run the `ntsc-rs-launcher` file. If it does not open, you may need to run the `ntsc-rs-standalone` file in the `bin` folder.

<h2 id="installation-macos">macOS</h2>

Follow [these instructions](../macos-installation) for running the installer. After installation, the standalone application can be found in your Applications folder.

<h2 id="installation-linux">Linux</h2>

If you're using Linux, the GUI in particular requires GStreamer and some of its plugins to be installed:

<details>
<summary>Ubuntu, Debian, and Linux Mint</summary>

```bash
$ sudo apt-get install libgstreamer1.0 gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav gstreamer1.0-alsa
```
</details>

<details>
<summary>Fedora</summary>

In order to decode and encode H.264 video, you'll need packages from the [RPM Fusion "free" repository](https://rpmfusion.org/Configuration).

After enabling the RPM Fusion "free" repository:

```bash
$ sudo dnf install gstreamer1 gstreamer1-plugins-base gstreamer1-plugins-good gstreamer1-plugins-bad-free gstreamer1-plugins-bad-freeworld gstreamer1-plugins-ugly gstreamer1-plugin-libav libavcodec-freeworld
```
</details>

<details>
<summary>Arch</summary>

```bash
$ sudo pacman -S gstreamer gst-libav gst-plugins-bad gst-plugins-base gst-plugins-good gst-plugins-ugly
```
</details>

You'll probably also need to give execute permissions to the application. This can be found under "Properties > Executable as Program" in the GNOME file manager, and similar places on others. You can also use the terminal (`chmod +x ntsc-rs-standalone`).
