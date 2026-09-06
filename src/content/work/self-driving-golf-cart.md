---
title: Self-Driving Golf Cart
order: 2
category: Robotics
status: shipped
summary: Transformed a standard golf cart into a full autonomous vehicle platform. Custom Nvidia Jetson carrier board, ADAS control module, and a CV pipeline for lane tracking, obstacle detection, and sign recognition.
lede: Transformed a standard golf cart into a full autonomous vehicle platform — custom Jetson carrier board, ADAS control module, and a computer-vision pipeline for lane tracking, obstacle detection and sign recognition.
tags:
  - C++
  - Python
  - ROS
  - Nvidia Jetson
  - OpenCV
  - Altium
draft: false
---

## The platform

A production golf cart is a good research vehicle for the same reason it is a bad one: everything is mechanical. Steering, throttle and braking all had to be brought under electronic control before a single line of autonomy code could matter, so the first deliverable was a complete ADAS control module driving all three.

On top of that sits a custom Nvidia Jetson carrier board with multi-channel analog-to-digital video capture, so the cart's cameras feed the compute module directly instead of going through off-the-shelf adapters.

## Perception

The vision pipeline runs on ROS and handles three jobs: obstacle detection, traffic sign recognition and lane tracking. C++ where the loop rate mattered, Python where iteration speed mattered.

## The part that outlasted me

I founded the project at the South Carolina Governor's School and led it across two cycles. Alongside the hardware, I mentored 20+ students and established an ongoing curriculum for autonomous systems development, so the platform keeps moving without its original team.
