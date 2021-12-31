---
lang: en-GB
title: Rest
description: Documentation for Erebus' Rest class
---

# Rest

> A rest manager for the client

## Properties

`.client`

> The client that instantiated this

```typescript
type client = Client;
```

- See [Client](Client.md)

`.invalidRequests`

> Number of invalid requests done in the last 10 minutes

```typescript
type invalidRequests = number | 0;
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

`.invalidRequestsResetAt`

> When the invalid requests were last reset

```typescript
type invalidRequestsResetAt = number;
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

`.queue`

> A queue for the requests

```typescript
type queue = AsyncQueue;
```

- See [AsyncQueue](https://www.sapphirejs.dev/docs/Documentation/api-utilities/classes/sapphire_async_queue.AsyncQueue)

`.rateLimits`

> An array of all the rate limit data received from the API

```typescript
type rateLimits = RateLimitHandler[];
```

- See [RateLimitHandler](Types.md#ratelimithandler)

`.requests`

> All requests that have been made so far

```typescript
type requests = APIRequest[];
```

- See [APIRequest](APIRequest.md)

`.requestsPerSec`

> Number of requests done in the last second

```typescript
type requestsPerSec = number | 0;
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

`.requestsPerSecResetAt`

> When the requests per second were last reset

```typescript
type requestPerSecResetAt = number;
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
