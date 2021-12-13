# Erebus

## Introduction

Hello, and welcome to the official documentation website for Erebus!

To get started with the library, you may want to use the following way:

## Get Started

```javascript
const erebus = require("erebus");
const client = new erebus.client({
  intents: 0,
  token: "YourTokenHere",
});

client.on("ready", () => {
  console.log("Ready!");
});

client.connect().catch(console.error);
```
