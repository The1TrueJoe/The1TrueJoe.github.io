---
title: openHC
order: 1
category: Firmware
status: wip
summary: Open, kernel-up firmware for Control4 home controllers — a modern Linux kernel and root filesystem built from source, running on four boards across three SoC families that the vendor shipped locked.
lede: Open, kernel-up firmware for Control4 controllers — a modern Linux kernel and root filesystem, built from source, running on hardware the vendor shipped locked.
tags:
  - Rust
  - Buildroot
  - Linux Kernel
  - Reverse Engineering
  - Docker
  - Control4
repo: https://github.com/The1TrueJoe/openHC
live: https://telaak.dev/openHC/
draft: false
---

## The problem with good hardware

Control4 controllers are well-built Linux machines that stop being useful the moment the vendor decides they are old. The silicon is fine — Intel CE5310, i.MX6 SoloLite, TI DM355 — and none of it is the reason a working box becomes e-waste.

openHC replaces the stack from the kernel up: a current Linux kernel and a root filesystem built from source with Buildroot, on the controller you already own. Four boards are proven so far — the EA-1, EA-3, CA-1 and IO Extender — and several more build without having booted yet.

## Getting in

Most of the work is not the firmware; it is the boot chain. Each family had to be opened before anything could be replaced: bootloader access, the secure-boot path, how the EA units bring up audio and graphics, what the IO Extender's relays are actually wired to. All of it is reverse-engineered from lawfully-owned units and published GPL sources, and all of it is written down in the project's documentation site rather than left in my notes.

## An installer that refuses to guess

Flashing the wrong image at real hardware is the failure that ends the project for whoever tries it, so `ohc-flash` identifies the board before it will install anything, and `ohc-flash plan` prints what an install would do without doing it. The GUI is the same Rust engine behind a front end.

Every supported board also has a documented path back to stock Control4 — the factory-restore button on the EA family, deleting `boot.scr` on the CA-1, one line of GRUB config on the HC-800. A firmware project that cannot be undone is one nobody should install.

## What is on the box

A Rust workspace supplies the on-device services: `ohc-webd` serves the dashboard, `ohc-portal` handles first-boot setup. The whole image builds in Docker — `make image BOARD=ea3-v2`, with nothing installed on the host but Docker and Python.

MIT licensed, and not affiliated with or endorsed by Control4 or Snap One.
