---
title: Pick-n-Place Machine
order: 7
category: Hardware
status: shipped
summary: Desktop PCB component placer built from aluminum extrusion. Runs Marlin firmware for motion control and OpenPNP for component pick-and-place vision.
lede: A desktop PCB component placer built from aluminum extrusion — Marlin firmware for motion control, OpenPNP for pick-and-place vision.
tags:
  - Marlin
  - OpenPNP
  - KiCad
  - C++
draft: false
---

## The motivation

Designing my own boards means assembling my own boards. Hand-placing 0402s is a tax on iteration speed, so the machine exists to make the next revision cheap.

## Mechanics and control

Aluminum extrusion frame with a gantry carrying the vacuum nozzle and camera. Marlin runs motion on the low level; OpenPNP handles part feeders, fiducials and vision-corrected placement on top.
