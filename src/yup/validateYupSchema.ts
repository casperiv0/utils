import * as yup from "yup";
import { createYupSchema } from "./createYupSchema.js";
import type { YupSchema } from "./YupSchema.js";

/**
 * validate a yup schema
 * @param obj The yup schema
 * @param data The data to validate
 * @returns An array with the error or null
 */
export async function validateSchema<T = any>(
  obj: YupSchema,
  data: T,
): Promise<(yup.ValidationError | null)[]> {
  const schema = createYupSchema(obj);

  try {
    await schema.validate(data);

    return [null];
  } catch (err) {
    return [err as yup.ValidationError];
  }
}
