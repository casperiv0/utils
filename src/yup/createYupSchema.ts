import * as yup from "yup";
import type { YupSchema } from "./YupSchema.js";

/**
 * merge input objects and return a `yup.object().shape`
 * @param {YupSchema[]} objs The schemas to create
 */
export function createYupSchema(...objs: YupSchema[]) {
  const merged = objs.reduce((all, curr) => ({ ...all, ...curr }), {});

  return yup.object().shape(merged);
}
