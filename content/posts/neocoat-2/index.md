---
author: "Binh Pham"
title: "NeoCoat (2): The new NeoCoat"
date: "2022-03-01"
description: "A pixel-art display you know you need."
tags: ["Firmware", "NeoCoat", "8-bit", "Pet Projects"]
categories: ["NeoCoat"]
draft: true
cover:
    image: "*Intro*" # image path/url
    alt: "NeoCoat" # alt text
    relative: true   # when using page bundles set this to true
    hidden: false
---
As I learned more and more, I realized the key to learning was sharing. If I kept everything I've done for myself, I can't grow as a Maker or as anything. To truly break that limit, I'm motivated to share my projects and opinions as articles so they can live on forever in an archive.

**NeoCoat (2)** was made with a simple purpose: to go beyond. This means going beyond the first NeoCoat's quality as well as going beyond myself as a Maker.


That's why I'm happy to share with you what I've been able to do with **NeoCoat (2)**.

[Picture]

# The birth of NeoCoat (2)

While the original NeoCoat was built flimsily with breadboards and wires, the new NeoCoat is made with care. To make NeoCoat a whole package, I designed a PCB for the components to be mounted on.

[Picture of PCB Board]

> The picture of the vase is a pun of my name. While my name has multiple meanings in Vietnamese (peaceful, equity, happiness), it can also be understood as "A vase". That is neat, so I picked it to put on the PCB. Besides, the vase kinda depicts my body.

With the PCB designed, NeoCoat (2) can be connected to an array of new components:
- An Accelerometer
- A Temperature Sensor
- Buttons
- Additional LEDs
- Battery
- More through direct pin wirings

[Picture of front pcb]

If the original NeoCoat needs constant power to run, NeoCoat (2) supports a charging module and a battery for mobile usage.

[Picture of the back]

Also, you can design a case for it to add a strap or whatever you want. In my case, I add a magnet and a strap for ease of use. Now I can stick my NeoCoat on my fridge or swing it around.

[Case Design]

# What does a NeoCoat (2) actually do?

Well... The NeoCoat is capable of only 4 things.

## 1. It can show you cool art.
[8-bit art functions]

You can draw directly on our web interface and your drawing will show up immediately.

## 2. You can play Snake on it.
[Snake]
Games are a must when it comes to such type of displays. That's why I included Snake in my build. It's silly but necessary.

## 3. You can play animations on it.
[Animations]

This opens up a whole new realm of possibilities. You can use NeoCoat as a decoration or as a light brush.

[Light Brush]

## 4. Your choice of functions
[Wildcards]

First, NeoCoat is most importantly a firmware and I wrote it in the most modular way possible. This means you can plug in your code easily.

Second, NeoCoat's PCB is filled with components that can do much more that its designated functions. For example, the accelerometer can make the NeoCoat into a flying mouse. The temperature sensor can make the NeoCoat into a thermostat.

That's why NeoCoat is the perfect choice for hardware hackers. You can do whatever you want with NeoCoat; it's your blank canvas. The best feature of NeoCoat is customization.

I'll be happy to hear your proposals of new functions for NeoCoat as well. Maybe we can share it here or on my Github repo for everyone to use. After all, NeoCoat is open-source.

# Make your own NeoCoat

If you're interested in NeoCoat, continue to read this article as I'll show you how to make one.

The making of NeoCoat is simple. However, I can only show you how to make the barebone version. At the time of this article, I didn't receive enough components for NeoCoat because of the China Lockdown. It sucks.

There are 4 steps in making a NeoCoat.
## 1. Prepare the ingridients
[Ingredients]

To start the DIY process, you have to acquire the ingredients first. There are only three ingredients in the minimum version:
- [Wemos D1]()
- [Neopixel Matrix]()
- [PCB]()

You can buy all through the links I provided. However, with the PCB, you need to order them through a vendor. In my case, I order my PCBs from Thien Lam PCB.

The Geber files for the PCBs are included on my repo.
## 2. Soldering
[Soldering picture]

On EasyEDA, you can find the schematics of NeoCoat and solder on the components accordingly. This is quite straightforward and you can probably find the way by just looking at the board.
## 3. Install the firmware
If you did the previous steps correctly, you should be able to power the board through the Wemos's Micro USB port now.

To install the firmware, you will need to install **PlatformIO**. The tutorial can be found [here](https://platformio.org/install/cli).

Next, you'll need to install **Git**. The tutorial can be found [here](https://github.com/git-guides/install-git#:~:text=To%20install%20Git%2C%20run%20the,installation%20by%20typing%3A%20git%20version%20.).


After that, open your command line and follow the below instructions:
```
# Clone my repo
git clone https://github.com/pham-tuan-binh/neo-coat.git

# Change your working directory
cd neo-coat

# This will install all the libraries needed for this project
platformio lib install

# This will upload the filesystem
platformio run -t uploadfs

# This will build your firmware
platformio run -t build

# This will upload your firmware 
platformio run -t upload

# Tadah you're done
```
## 4. Control the board
If the firmware is installed correctly, you will find a new WIFI popping up in your phone's setting. It should be named "NeoCoat".

Connect to this and you should be able to access NeoCoat's web interface at ""

Congratulations! You have made your first NeoCoat.

# Closing
NeoCoat was my favorite side project. It doesn't solve climate change or plastic pollution but it is fun and it can make people smile. 

For most of my audience, building a NeoCoat and understanding the technologies behind it can be hard and may require a high level of dedication. However, as you read more and more, you acquire new knowledge and what boggles you now won't in the future.

> Keep doing what you love and what comes will come.
[Picture of me]