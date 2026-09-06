---
title: RISC-V CPU
order: 6
category: Digital design
status: shipped
summary: Pipelined RISC-V RV32I implementation on an FPGA with full GPIO support, written in SystemVerilog.
lede: A pipelined RV32I implementation on an FPGA with full GPIO support, written from scratch in SystemVerilog.
tags:
  - SystemVerilog
  - Quartus
  - FPGA
  - RISC-V
draft: false
---

## The core

The full RV32I base integer set, pipelined, with hazard handling and a GPIO peripheral so the core can actually drive something on the board rather than only pass a testbench.

## Why it mattered

Writing the pipeline by hand is the fastest way to stop treating a processor as a black box — every stall, forward and branch penalty you read about later has a place you already built.
