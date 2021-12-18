---
lang: en-GB
title: Reference
description: Documentation for Erebus' typings Reference
---

<html style="scroll-behavior: smooth;"></html>

# Reference

## Typings

### AdvancedHeartbeatInfo extends [HeartbeatInfo](#HeartbeatInfo)

> Advanced information for a heartbeat

```typescript
interface AdvancedHeartbeatInfo {
  intervalTime: number;
  interval: NodeJS.Timeout | null;
}
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- See [NodeJS.Timeout](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/globals.d.ts#L547)
- See [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

### AnyGuildChannel

> Type definition for all guild channel classes

```typescript
type AnyGuildChannel =
  | NewsChannel
  | StageChannel
  | StoreChannel
  | TextChannel
  | VoiceChannel;
```

### ClientStatus

> The state of the client connection

```typescript
enum ClientStatus {
  Disconnected,
  Connecting,
  Connected,
  Reconnecting,
  Resuming,
}
```

### HeartbeatInfo

> Data about an heartbeat

```typescript
interface HeartbeatInfo {
  first: boolean;
  acknowledged: boolean;
}
```

- See [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

### Intents

> Intents to send to the API

```typescript
enum Intents {
  guilds = 1,
  guildMembers = 2,
  guildBans = 4,
  guildEmojis = 8,
  guildIntegrations = 16,
  guildWebhooks = 32,
  guildInvites = 64,
  guildVoiceStates = 128,
  guildPresences = 256,
  guildMessages = 512,
  guildMessageReactions = 1024,
  guildMessageTyping = 2048,
  directMessages = 4096,
  directMessageReactions = 8192,
  directMessageTyping = 16384,
}
```

### Snowflake

> Represents a DIscord's snowflake

```typescript
type Snowflake = string;
```

- See [Discord API Snowflakes Reference](https://discord.com/developers/docs/reference#snowflakes)
- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Token

> A valid token for the API

```typescript
type Token = `${string}.${string}.${string}`;
```

- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
