---
lang: en-GB
title: APIRequest
description: Documentation for Erebus' APIRequest class
---

<html style="scroll-behavior: smooth;"></html>

# APIRequest

> A class representing a request to the API

## Properties

`.attachments`

> A list of attachments to send

```typescript
type attachments = Attachment[];
```

- See [Attachment](Types.md#attachment)

`.baseUrl`

> The base url of this request

- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

`.body`

> The JSON body to send

```typescript
type body = Json | undefined;
```

- See [Json](Types.md#json)
- See [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

`.headers`

> Headers to be sent in the request

```typescript
type headers = OutgoingHttpHeaders;
```

- See [OutgoingHttpHeaders](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L76)

`.method`

> Method used for this request

```typescript
type method = RequestMethod;
```

- See [RequestMethod](Types.md#requestmethod)

`.path`

> The path of this request

```typescript
type path = Path;
```

- See [Path](Types.md#path)

`.query`

> Query applied to the request

```typescript
type query = URLSearchParams;
```

- See [URLSearchParams](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/url.d.ts#L100)

`.rest`

> The rest manager that instantiated this

```typescript
type rest = Rest;
```

`.status`

> The status of this request

```typescript
type status = RequestStatus;
```

- See [RequestStatus](Types.md#requeststatus)
- Default value is `RequestStatus.Pending`

**get** `.route`

> The route of this request

```typescript
type route = Path;
```

- See [Path](Types.md#path)

**get** `.url`

> The full URL of this request

```typescript
type url = URL;
```

- See [URL](https://nodejs.org/api/url.html#class-url)

## Constructor

```typescript
new APIRequest(rest, path, method, options);
```

| Parameter | Default | Description                     | Type                                        | Required |
| --------- | ------- | ------------------------------- | ------------------------------------------- | -------- |
| rest      | -       | The rest that instantiated this | `Rest`                                      | `true`   |
| path      | -       | The path to request             | [`Path`](Types.md#path)                     | `true`   |
| method    | -       | The method of the request       | [`RequestMethod`](Types.md#requestmethod)   | `true`   |
| options   | `{}`    | Options for this request        | [`RequestOptions`](Types.md#requestoptions) | `false`  |

## Functions

### addAttachments(attachments)

> Add some attachments to this request

| Parameter   | Description        | Type           | Optional |
| ----------- | ------------------ | -------------- | -------- |
| attachments | Attachments to add | `Attachment[]` | `false`  |

- See [Attachment](Types.md#attachment)

**Returns** the new request

```typescript
APIRequest;
```

- See [APIRequest](APIRequest.md)

### editHeaders(headers)

> Edit headers for this request

| Parameter | Description           | Type                  | Optional |
| --------- | --------------------- | --------------------- | -------- |
| headers   | Headers to add/remove | `OutgoingHttpHeaders` | `false`  |

- See [OutgoingHttpHeaders](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v14/http.d.ts#L76)

**Returns** the new request

```typescript
APIRequest;
```

- See [APIRequest](APIRequest.md)

### removeAttachments(attachments)

> Remove some attachments from this request

| Parameter   | Description           | Type       | Optional |
| ----------- | --------------------- | ---------- | -------- |
| attachments | Attachments to remove | `string[]` | `false`  |

- See [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

**Returns** the new request

```typescript
APIRequest;
```

- See [APIRequest](APIRequest.md)

### send()

> Send the request to the API

**Returns** a promise with the data received from the API or null if there is no data

```typescript
Promise<Response>
```

- See [Response](Types.md#response)
