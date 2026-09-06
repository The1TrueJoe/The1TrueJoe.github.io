---
title: LLM Voice Assistant
order: 4
category: Embedded
status: wip
summary: Far-field mic array with XMOS DSP for beamforming and noise cancellation. Zephyr RTOS on i.MXRT as the main controller, ESP32 as Wi-Fi NIC, OTA firmware for all 3 chips, and real-time audio streaming to an LLM pipeline.
lede: A far-field microphone array with XMOS DSP for beamforming and noise cancellation, streaming real-time audio into an LLM pipeline.
tags:
  - Zephyr RTOS
  - C
  - XMOS
  - ESP-IDF
  - Python
  - KiCad
draft: false
---

## Hearing across a room

Voice assistants fail at distance, not at language. The front end is a far-field mic array feeding an XMOS DSP that does beamforming and noise cancellation before anything upstream sees a sample.

## Three chips, one image

Zephyr RTOS on an i.MX RT is the main controller; an ESP32 acts purely as the Wi-Fi NIC; the XMOS part owns audio. All three take OTA firmware updates from a single update flow — the hardest and least visible part of the build.

## Status

In progress: real-time audio streaming into the LLM pipeline works end to end; board revisions and the update path are where the effort is going now.
