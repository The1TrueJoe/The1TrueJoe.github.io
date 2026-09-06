---
title: Agentic Audio Streamer
order: 5
category: Hardware
status: wip
summary: Multi-room audio system using a SigmaDSP for DSP, PCM DACs, and a Raspberry Pi CM5 for control. Spotify Connect integration and a REST API for LLM-driven control.
lede: A multi-room audio system built on a SigmaDSP and PCM DACs, controlled by a Raspberry Pi CM5 — Spotify Connect integration plus a REST API for LLM-driven control.
tags:
  - Python
  - SigmaDSP
  - Raspberry Pi
  - Spotify SDK
  - KiCad
draft: false
---

## Signal path

A SigmaDSP handles crossover, EQ and room correction in hardware; PCM DACs take it to the amplifiers. Keeping DSP off the application processor means the audio path does not care what the software is doing.

## Control

A Raspberry Pi CM5 runs control and streaming: Spotify Connect for ordinary listening, and a REST API that exposes zones, sources and DSP parameters so an LLM agent can drive the house instead of an app.
