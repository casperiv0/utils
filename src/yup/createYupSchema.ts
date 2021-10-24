import * as yup from "yup";

/**
 * merge input objects and return a `yup.object().shape`
 * @param {YupSchema[]} objs The schemas to create
 */
export function createYupSchema(...objs: yup.AnySchema[]) {
  const merged = objs.reduce((all, curr) => ({ ...all, ...curr }), {});

  return yup.object().shape(merged);
}
