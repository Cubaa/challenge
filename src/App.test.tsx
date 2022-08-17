import React from "react";
import { delay } from "./service/delay";

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

test("should not be resolved before the timeout is over", async () => {
  const mock = jest.fn();
  delay(
    {
      spaces: [
        {
          name: "Kraków",
        },
      ],
    },
    500
  ).then(mock);

  jest.advanceTimersByTime(200);
  await Promise.resolve();
  expect(mock).not.toHaveBeenCalled();
  jest.advanceTimersByTime(300);
  await Promise.resolve();
  expect(mock).toHaveBeenCalled();
});
