---
layout: docs.njk
title: Command-line interface
eleventyNavigation:
  key: Command-line interface
  order: 4
---

ntsc-rs's standalone distribution includes not only a GUI but also a CLI (command-line interface), distributed as a separate binary.

## Location

### Windows

On Windows, the `ntsc-rs-cli` binary is in the `bin` folder, amidst all of the GStreamer libraries it uses.

### macOS

On macOS, the `ntsc-rs-cli` binary is inside the `ntsc-rs.app` bundle. If you've installed it to your Applications folder, its path will be:

```
/Applications/ntsc-rs.app/Contents/MacOS/ntsc-rs-cli
```

For the purposes of keeping everything encapsulated in one app bundle and not leaving any cruft behind if you decide to delete it, the above path is the only default way to access it. However, you can create a shortcut so that you can use `ntsc-rs-cli` as a regular command:

```
ln -s /Applications/ntsc-rs.app/Contents/MacOS/ntsc-rs-cli /usr/local/bin/ntsc-rs-cli
```

### Linux

On Linux, the `ntsc-rs-cli` binary is right next to `ntsc-rs-standalone`, and should be easy to find since GStreamer's libraries are not bundled alongside it.

## Usage

Detailed help for all of the command-line flags can be found in using `ntsc-rs-cli --help`. While you can technically type the contents of JSON presets directly into the command, it's meant to be used with pre-existing preset files. Here's a basic template:

```
ntsc-rs-cli -i <input file> -o <output file> -p <preset file>
```

### Scripting

The CLI will not overwrite files by default. When running in an interactive terminal, it will prompt the user as to whether or not it should overwrite the output file.

To avoid holding up scripts by prompting the user, you can use the `-y`/`--overwrite` flag to always overwrite existing files, or the `-n`/`--no-overwrite` flag to never overwrite existing files.
