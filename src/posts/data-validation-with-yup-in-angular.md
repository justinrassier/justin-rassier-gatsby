---
title: "Data Validation With 'Yup' in Angular"
date: "2020-02-14"
tags: ["dev", "angular"]
---

# Data Validation With 'Yup' in Angular

If you buy into a type system like TypeScript, it can be addicting to add types to everything in hope to eliminate as many runtime exceptions as possible. The problem is, the TypeScript compiler can't actually validate that what you told it is true. This comes into play in particular at the boundaries of your applications when you are reaching out into the great unknown... the API. 

It's  easy to [lie to the compiler](../stop-lying-to-the-compiler) and introduce a mismatch between what TypeScript thinks your types are and what they are in reality. The manual way to tackle this is to add all of your defensive checks and casting right when you get your data back from the server:

```typescript
 public getPersonById(personId: number): Observable<IPerson>  {
    return this.http.get("/api/people/1").pipe(
        map((response: any) => { 
            let person: IPerson;
            // defensive checks and data conversion

            return person;

        })
    );
 }
```

This is fine enough for a simple app with a few API endpoints, but it definitely doesn't scale very well. Enter a cool little library called [Yup](https://github.com/jquense/yup). Yup allows you to define a schema and validate any data against that schema. Here's a schema definition for our `IPerson`:

```typescript
import * as yup from "yup";
const personSchema = yup
  .object()
  .strict(true)
  .shape({
    id: yup
      .number()
      .integer()
      .positive()
      .required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup
      .number()
      .integer()
      .positive()
  });

```
**Note:** Notice the use of the `strict(true)` inside of your schema definition. By default, Yup is going to try to leverage type coercion, but if you are like me, I want a strict data validation.

Now you can use this schema to validation any incoming data against it. Everything is promised based, so a successful validation will result in a resolution with your data, while a failure will result in a rejection or an exception.

```typescript
personSchema
  .validate({id: 1, })
  .then(res => console.log(res))
  .catch(e => console.log("ERROR", e));
```

This is great if you want to use something like `async/await`, but if you love your rxjs, you can see how slick this can actually be to insert into your `HttpClient` pipeline:

```typescript
  public getPersonById(personId: number): Observable<IPerson> {
    return this.http
      .get("/api/people/1")
      .pipe(
        switchMap(responseData => personSchema.validate(responseData)),
        map(person => person as IPerson), // safe to tell the compiler the type
        catchError(e => {
          console.log("schema validation error", e);
          // do what you need here in case of an error. 
          // Log? Rethrow? Return a safe default?
          throw Error("Error in parsing person data from API")
        }
      );
  }
```

After you define your schema, it's essentially a one-liner to get safe schema validation as part of your HTTP request! Now you can be confident that the data flowing through your application that comes from an API is truly what the TypeScript type system claims that they are!


Yup comes with all sorts of other validation and casting extensions which could also be super useful when needing to augment some of the core behavior. But for quick and safe data validation, this is all you need to get started. 