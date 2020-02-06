---
title: "Stop Lying to the Compiler"
date: "2020-02-06"
tags: ["dev", "angular", "typescript"]
---
# Stop Lying to the Compiler

Typescript is great, but you can get into some hairy situations at the boundaries of your application where it feels like the compiler is lying to you. In fact, it's probably because you are lying to it first.


The most common example I see is when reaching out to the great unknown, the API. By definition, the data that comes back from the API has no strict type, nor is there a way for TypeScript to know. So when you use the Angular `HttpClient` it can be very tempting to give a hint to TypeScript on what you are getting back:

```typescript
return this.http.get("/api/people").pipe(
      map((response: IPerson[]) => { // LIES!!!!...maybe
        //...
        return response; 
      })
    );
```

What's the harm? You wanted people, so tell TypeScript you got people. This is fine unless you are first lying to the compiler about what makes up an `IPerson` and what you can get back from a JSON API.

Take our `IPerson` interface:

```typescript
export interface IPerson {
  firstName: string;
  lastName: string;
  birthday: Date;
}
```

JSON doesn't have a primitive for `Date` it comes in as an [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) string (hopefully). So you just introduced a lie to the rest of your application where you are now setup for unexpected runtime exceptions. Any consumer of this service may now try to do some date things to that birthday and get really confused when it throws an exception like

```
Uncaught TypeError: birthday.toDateString is not a function
```

So what do you do? Well it depends on how much effort you want to put in. You could go as far as making a schema validation mechanism that validates what you think the JSON should be is truly correct (think [JSON Decoders in Elm](https://package.elm-lang.org/packages/elm/json/latest/Json-Decode)) but that can introduce some overhead for a simple project. The simplest thing you can do is be a bit defensive at the boundaries of your application and make sure what you are passing along to the rest of the application is truly what you say it is.

