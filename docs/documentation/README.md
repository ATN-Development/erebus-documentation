# Erebus

## Introduction

Hello, and welcome to the official documentation website for Erebus! Erebus is a Discord API wrapper, use it to build your own Discord bot and bring it to the next level!

## Prerequisites

Before installing the library, you may have done the following:

- Installed [Node.JS](https://nodejs.org/en/download/), with a version of at least `v16.0.0` _(Use the `node -v` command to check the version you have installed on your device)_

## Installation

We currently do not support installation of our library, so you may install by creating a fork of our [GitHub repository](https://github.com/ATN-Development/erebus) and clone it on your local project through the `git clone` command.

## Get Started

```javascript
const erebus = require("erebus");
const client = new erebus.Client({
  intents: 0,
  token: "YourTokenHere",
});

client.on("ready", () => {
  console.log("Ready!");
});

client.connect().catch(console.error);
```
