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
type= Map\<Snowflake, UnavailableGuild\>()
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
