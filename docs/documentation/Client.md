---
lang: en-GB
title: Client
description: Documentation for Erebus' Client class
---

<html style="scroll-behavior: smooth;"></html>

# Client

# Client extends [EventEmitter](https://nodejs.org/api/events.html#class-eventemitter)

> A Discord client

## Properties

`.application?`

> The client's application

```typescript
type application = Application | undefined;
```

- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

`.guilds`

> The guilds the client is in

```typescript
type guilds = Map<Snowflake, UnavailableGuild>;
```

- See [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- See [Snowflake](Types.md#snowflake)

`.heartbeatInfo`

> Data about an heartbeat

```typescript
type heartbeatInfo = AdvancedHeartbeatInfo;
```

- See [AdvancedHeartbeatInfo](Types.md#advancedheartbeatinfo-extends-heartbeatinfo)

`.intents`

> Intents used by this client

```typescript
type intents = Intents;
```

- See [Intents](Types.md#intents)

`.largeThreshold`

> Total number of members where the gateway will stop sending offline members in the guild member list

```typescript
type largeThreshold = number;
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

`.rest`

> The rest manager of this client

```typescript
type rest = Rest;
```

`.seq`

> The last sequence number received from the WebSocket server

```typescript
type seq = number | null;
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- See [null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

`.sessionId`

> The session ID of this client

```typescript
type sessionId = string | undefined;
```

- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

`.status`

> The status of the connection of this client

```typescript
type status = ClientStatus;
```

- See [ClientStatus](Types.md#clientstatus)

`.token`

> The token used by this client

```typescript
type = Token;
```

- See [Token](Types.md#token)

`.user`

> The client user

```typescript
type = User | undefined;
```

- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

`.userAgent`

> The user agent to append to requests to the API

```typescript
type = string | undefined;
```

- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

`.ws`

> The WebSocket of this client

```typescript
type = WebSocket | undefined;
```

- See [WebSocket](https://github.com/websockets/ws/blob/HEAD/doc/ws.md#class-websocket)
- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## Constructor

```typescript
new Client(options);
```

| Parameter              | Default                     | Description                                                                                                                                   | Type                                      | Required |
| ---------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | -------- |
| options                | -                           | Options for the client                                                                                                                        | [`ClientOptions`](Types.md#clientoptions) | `true`   |
| options.token          | `process.env.DISCORD_TOKEN` | The token of this client. This defaults to `process.env.DISCORD_TOKEN` if none is provided                                                    | `Token \| undefined`                      | `false`  |
| options.largeThreshold | `50`                        | Total number of members where the gateway will stop sending offline members in the guild member list                                          | `number \| undefined`                     | `false`  |
| options.intents        | -                           | Intents to use for this client                                                                                                                | [`Intents`](Types.md#intents)             | `true`   |
| options.userAgent      | -                           | An optional user agent to add in the requests to the API. See [Discord's reference](https://discord.com/developers/docs/reference#user-agent) | `string \| undefined`                     | `true`   |

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- See [Token](Types.md#token)
- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

## Functions

### connect()

> Connect this client to the WebSocket.

**Returns**

```typescript
Promise<void>
```

- See [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- See [void](https://www.typescriptlang.org/docs/handbook/2/functions.html#void)

### getGatewayUrl()

> Get the gateway url.

**Returns**

```typescript
Promise<string>
```

- See [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## Events

### channelCreate

> Fired when a guild channel is created

| Parameter | Description                  | Type                                          |
| --------- | ---------------------------- | --------------------------------------------- |
| channel   | The channel that got created | [`AnyGuildChannel`](Types.md#AnyGuildChannel) |

- See [AnyGuildChannel](Types.md#anyguildchannel)

### channelDelete

> Fired when a guild channel is deleted

| Parameter | Description                  | Type                                          |
| --------- | ---------------------------- | --------------------------------------------- |
| channel   | The channel that got deleted | [`AnyGuildChannel`](Types.md#anyguildchannel) |

### channelUpdate

> Fired when a guild channel is updated

| Parameter | Description                  | Type                                          |
| --------- | ---------------------------- | --------------------------------------------- |
| channel   | The channel that got updated | [`AnyGuildChannel`](Types.md#anyguildchannel) |

### error

> Fired when a server-side error occurs

| Parameter | Description           | Type                                                      |
| --------- | --------------------- | --------------------------------------------------------- |
| channel   | The error encountered | [`Error`](https://nodejs.org/api/errors.html#class-error) |

### ready

> Fired when the client is ready

### resumed

> Fired when a resume payload is sent

### unknownPayload

> Fired when an unknown payload has been received

| Parameter | Description          | Type                                                                                                    |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------------- |
| data      | The payload received | [`GatewayDispatchPayload`](https://github.com/discordjs/discord-api-types/blob/main/gateway/v9.ts#L270) |

### warn

> Fired when something wrong happens, but is not grave enough to kill the process

| Parameter | Description      | Type                                                                                                |
| --------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| message   | The warn message | [`string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
