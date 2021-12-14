---
lang: en-GB
title: Erebus Client Class
description: Documentation for Erebus' Client class
---

<html style="scroll-behavior: smooth;"></html>

# Client

# Client extends EventEmitter

A Discord client

## Properties

`.application`

> The client's application

```typescript
type = Application | undefined;
```

`.guilds`

> The guilds the client is in

```typescript
type = Map<Snowflake, UnavailableGuild>();
```

`.heartbeatInfo`

> Data about an heartbeat

```typescript
type = AdvancedHeartbeatInfo;
```

`.intents`

> Intents used by this client

```typescript
type = Intents;
```

`.largeThreshold`

> Total number of members where the gateway will stop sending offline members in the guild member list

```typescript
type = number;
```

`.rest`

> The rest manager of this client

```typescript
type = Rest;
```

`.seq`

> The last sequence number received from the WebSocket server

```typescript
type = number | null;
```

`.sessionId`

> The session ID of this client

```typescript
type = string | undefined;
```

`.status`

> The status of the connection of this client

```typescript
type = ClientStatus;
```

`.token`

> The token used by this client

```typescript
type = string;
```

`.user`

> The client user

```typescript
type = APIUser | undefined;
```

`.userAgent`

> The user agent to append to requests to the API

```typescript
type = string | undefined;
```

`.ws`

> The WebSocket of this client

```typescript
type = WebSocket | undefined;
```

## Constructor

```typescript
new Client(options);
```

| Parameter              | Default                     | Description                                                                                                                                   | Type                  |
| ---------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| options.token          | `process.env.DISCORD_TOKEN` | The token of this client. This defaults to `process.env.DISCORD_TOKEN` if none is provided                                                    | `Token \| undefined`  |
| options.largeThreshold | `50`                        | Total number of members where the gateway will stop sending offline members in the guild member list                                          | `number \| undefined` |
| options.intents        | -                           | Intents to use for this client                                                                                                                | `Intents`             |
| options.userAgent      | -                           | An optional user agent to add in the requests to the API. See [Discord's reference](https://discord.com/developers/docs/reference#user-agent) | `string \| undefined` |

## Functions

### connect()

> Connect this client to the WebSocket.

**Returns**

```typescript
Promise<void>
```

### getGatewayUrl()

> Get the gateway url.

**Returns**

```typescript
Promise<string>
```

## Events

### channelCreate

> Fired when a guild channel is created

| Parameter | Description                  | Type              |
| --------- | ---------------------------- | ----------------- |
| channel   | The channel that got created | `AnyGuildChannel` |

### channelDelete

> Fired when a guild channel is deleted

| Parameter | Description                  | Type              |
| --------- | ---------------------------- | ----------------- |
| channel   | The channel that got deleted | `AnyGuildChannel` |

### channelUpdate

> Fired when a guild channel is updated

| Parameter | Description                  | Type              |
| --------- | ---------------------------- | ----------------- |
| channel   | The channel that got updated | `AnyGuildChannel` |

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

| Parameter | Description          | Type                   |
| --------- | -------------------- | ---------------------- |
| data      | The payload received | GatewayDispatchPayload |

### warn

> Fired when something wrong happens, but is not grave enough to kill the process

| Parameter | Description      | Type   |
| --------- | ---------------- | ------ |
| message   | The warn message | string |
