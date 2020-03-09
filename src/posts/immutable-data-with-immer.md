---
title: "Immutable Data with Immer"
date: "2020-03-11"
tags: ["dev"]
---

# Immutable Data with Immer
Working with immutable data in JavaScript is a hot trend these days. Favoring a central location for immutable updates to state over dispersed mutation gives you all sorts of benefits; one of which is greater performance. Having immutable data means you can turn on `OnPush` change detection in Angular. This means change detection will kick off of a change of input or an emitted event from an output. Since referential checks are super fast in JavaScript, change detection is dead simple and more performant.

The most common way to update an object in an immutable way is utilizing the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Syntax)

```typescript

let justin = {firstName: "Justin", lastName: "Rassier"}
let jason =  { ...justin, firstName: "Jason" }
justin === jason // false
```
This works well for simple, flat object. As soon as you start getting into nested data, it gets a bit...gross. Given the following nested object:

```typescript
let justin = {
  firstName: "Justin",
  lastName: "Rassier",
  addresses: [{
    type: "HOME",
    street: "123 Fake St.",
    city: "Saint Paul"
  }]
}
```

To update the first address, you would have to do something like this:

```typescript
let updatedJustin = { ...justin, addresses: [{ ...justin.addresses[0], type: "WORK" }] };
```

There are all sorts of things wrong with this example, but it gets the point across that it becomes difficult to manage immutable updates to large data structures, even with the nice syntax help of the spread operator.

## Enter Immer

[Immer](https://immerjs.github.io/immer/docs/introduction) is a library that allows you to make immutable changes to your data in a way that feels like regular old mutation. Take the same example from before and let's update a field on the nested object:

```typescript
import produce from "immer";

const updatedJustin = produce(justin, draftState => {
    draftState.addresses[0].type = "WORK";
});

console.log(updatedJustin === justin) // false
```

You will have to use your imagination a bit, but you can see as the complexity of your data structures expands, the updating of those values becomes much easier than manually spreading through your object graph. It also becomes way easier to reason about, and much harder to screw up. You don't have to think about which array operations are immutable and which ones mutate, it's all just taken care of for you.

Immer can easily be introduced into Redux/NGRX or any other centralized state management system that favors immutability.

So go forth and update your data with confidence!