# @casper124578/utils

A package with useful node util functions (_mostly for my personal projects_)

## Example

**ts example**

```ts
import * as yup from "yup";
import { validateSchema } from "@casper124578/utils";

const testSchemaObj = {
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
};

// later in the code
const data = {
  /* some data here */
};

const [error] = await validateSchema(testSchemaObj);

if (error) {
  return console.log("validation error!", error);
}

console.log("validation success!");
```
