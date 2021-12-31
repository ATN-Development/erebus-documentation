---
lang: en-GB
title: Typings
description: Documentation for Erebus' type definitions
---

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

### Attachment

> An attachment to send to the API

```typescript
interface Attachment {
  /**
   * The name of this attachment
   */
  name: string;

  /**
   * The data for this buffer
   */
  data: Buffer;
}
```

- See [Buffer](https://nodejs.org/api/buffer.html#buffer)
- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### ClientOptions

> Options to instantiate a client

```typescript
interface ClientOptions {
  /**
   * The token of this client
   * This defaults to `process.env.DISCORD_TOKEN` if none is provided
   */
  token?: Token;

  /**
   * Total number of members where the gateway will stop sending offline members in the guild member list
   */
  largeThreshold?: number;

  /**
   * Intents to use for this client
   */
  intents: Intents;

  /**
   * An optional user agent to add in the requests to the API
   * @see https://discord.com/developers/docs/reference#user-agent
   */
  userAgent?: string;
}
```

- See [Discord's API User Agent documentation](https://discord.com/developers/docs/reference#user-agent)
- See [Intents](#intents)
- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- See [Token](#token)

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

### Json

> Any JSON data

```typescript
type Json = Json[] | boolean | number | string | { [property: string]: Json };
```

### Path

> The path for a request to the API

```typescript
type Path = `/${string}`;
```

### RateLimitHandler

> Data about ratelimits related to a bucket

```typescript
interface RateLimitHandler {
  /**
   * A unique string denoting the rate limit being encountered
   */
  bucket: string;

  /**
   * The number of requests that can be made
   */
  limit: number;

  /**
   * The number of remaining requests that can be made
   */
  remaining: number;

  /**
   * Epoch time (seconds) at which the rate limit resets
   */
  reset?: number;

  /**
   * Routes that share the same bucket
   */
  routes: `${RequestMethod} ${Path}`[];
}
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- See [Path](#path)
- See [RequestMethod](#requestmethod)
- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### RequestMethod

> The method of a request to the API

```typescript
type RequestMethod = "DELETE" | "GET" | "PATCH" | "POST" | "PUT";
```

### RequestOptions

> The options for this request

```typescript
interface RequestOptions {
  /**
   * The base url for this request
   */
  url?: string;

  /**
   * The query of this request
   */
  query?: URLSearchParams;

  /**
   * Headers to be sent for this request
   */
  headers?: OutgoingHttpHeaders;

  /**
   * Attachments to add to the body of this request
   */
  attachments?: Attachment[];

  /**
   * The JSON body of this request
   */
  body?: Json;
}
```

- See [Attachment](#attachment)
- See [Json](#json)
- See [OutgoingHttpHeaders](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L76)
- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- See [URLSearchParams](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/url.d.ts#L100)

### RequestStatus

> The status of a request to the API

```typescript
enum RequestStatus {
  Pending,
  InProgress,
  Finished,
  Failed,
}
```

### Response

> A response received from the API

```typescript
interface Response {
  /**
   * The received data
   */
  data: string | null;

  /**
   * The status code received for this request
   */
  statusCode: number;

  /**
   * Headers received from the API
   */
  headers: IncomingHttpHeaders;

  /**
   * The status message received for this request
   */
  status: string;

  /**
   * The APIRequest object that instantiated this
   */
  request: APIRequest;
}
```

- See [APIRequest](APIRequest.md)
- See [IncomingHttpHeaders](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L7)
- See [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

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
