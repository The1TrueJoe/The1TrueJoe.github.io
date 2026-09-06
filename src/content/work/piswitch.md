---
title: PiSwitch
order: 3
category: Hardware
status: shipped
summary: 7-port managed network switch built around a Raspberry Pi CM4. Custom controller board, web UI for VLAN management, and out-of-band management over a dedicated serial console.
lede: A 7-port managed network switch built around a Raspberry Pi CM4 — custom controller board, web UI for VLAN management, and out-of-band management over a dedicated serial console.
tags:
  - Python
  - React
  - KiCad
  - Linux
  - iptables
draft: false
---

## Why build it

Managed switches are either cheap and opaque or expensive and licensed. A Compute Module 4 gives you a real Linux control plane for the price of the opaque option — if you are willing to design the board around it.

## The board

A custom controller board carries the CM4, power, the seven-port fan-out, and a dedicated serial console path. The console is the point: out-of-band management means the switch stays reachable even when the software side is mid-rebuild.

## The control plane

Python services translate configuration into iptables and interface state; a React web UI puts VLAN management in front of it, so day-to-day changes never need a shell.
