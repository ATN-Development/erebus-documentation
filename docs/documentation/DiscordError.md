---
lang: en-GB
title: DiscordError
description: Documentation for Erebus' DiscordError class
---

# DiscordError

# DiscordError extends [Error](https://nodejs.org/api/errors.html#class-error)

> A class representing a Discord error

## Properties

`.attachments`

> The attachments sent in the request

```typescript
type attachments = Attachment[] | undefined;
```

- See [Attachment](Types.md#attachment)
- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

`.body`

> The body sent in the request, if any

```typescript
type body = Json | undefined;
```

- See [Json](Types.md#json)
- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

`.headers`

> Headers sent in the request

```typescript
type headers = OutgoingHttpHeaders;
```

- See [OutgoingHttpHeaders](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L76)

`.method`

> Method used in the request

```typescript
type method = RequestMethod;
```

- See [RequestMethod](Types.md#requestmethod)

`.path`

> Path of the request

```typescript
type path = Path;
```

- See [Path](Types.md#path)

`.query`

> The query of the request

```typescript
type query = string | undefined;
```

- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

`.status`

> The status message received from the API

```typescript
type status = string;
```

- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

`.statusCode`

> The status code received from this request

```typescript
type statusCode = number;
```

- See [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Constructor

```typescript
new DiscordError(request, res);
```

| Parameter | Default | Description           | Type                            | Required |
| --------- | ------- | --------------------- | ------------------------------- | -------- |
| request   | -       | The request sent      | [`APIRequest`](APIRequest.md)   | `true`   |
| res       | -       | The response received | [`Response`](Types.md#response) | `true`   |
