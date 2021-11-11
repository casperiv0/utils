import * as yup from "yup";
import type { ObjectShape } from "yup/lib/object";

/**
 * merge input objects and return a `yup.object().shape`
 * @param {ObjectShape[]} objs The schemas to create
 */
export function createYupSchema(...objs: ObjectShape[]) {
  const merged = objs.reduce((all, curr) => ({ ...all, ...curr }), {});

  return yup.object().shape(merged);
}
