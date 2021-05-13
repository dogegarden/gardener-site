import { useState, useEffect, useRef } from "react";

const usePressKeys = (options) => {
  if (!options || Object.keys(options).length === 0) {
    throw new Error(`No object parameter found use: {userKeys: ... } `);
  }

  const userKeys = options.userKeys || null;
  const order = options.order || false;
  const ref = options.ref || window;

  const [keyPress, setKeyPress] = useState(false);
  const [anyKeyPressed, setAnyKeyPressed] = useState([]);

  const prevKey = useRef("");

  const settings = {
    type: null,
    objRef: ref,
    downHandler: undefined,
    upHandler: undefined,
    useEffect: null,
    output: null
  };

  const setData = (settings) => {
    if (userKeys) {
      if (typeof userKeys === "string") {
        settings.output = keyPress;
        settings.downHandler = downHandler;
        settings.upHandler = upHandler;
        settings.useEffect = Init;
        settings.type = "STRING";
      }
      if (Array.isArray(userKeys)) {
        settings.output = areKeysPressed(userKeys, anyKeyPressed);
        settings.downHandler = downMultiHandler;
        settings.upHandler = upMultiHandler;
        settings.useEffect = Init;
        settings.type = "ARRAY";
      }
      if (Number.isInteger(userKeys)) {
        throw new Error(
          `Invalid 'userKeys' property: must be {userKeys:'KEY'} or {userKeys:[KEY, ...]}`
        );
      }
    } else {
      throw new Error(
        `Invalid 'userKeys' property: must be {userKeys:'KEY'} or {userKeys:[KEY, ...]}`
      );
    }

    return settings;
  };

  const downHandler = ({ key }) => {
    if (prevKey.current === userKeys) return;
    if (key === userKeys) {
      setKeyPress(true);
      prevKey.current = key;
    }
  };

  const upHandler = ({ key }) => {
    if (key === userKeys) {
      setKeyPress(false);
      prevKey.current = "";
    }
  };

  const downMultiHandler = ({ key, repeat }) => {
    if (repeat) return;

    setAnyKeyPressed((prevState) => [...prevState, key]);
  };

  const upMultiHandler = ({ key }) => {
    setAnyKeyPressed((prevState) => [...prevState]);
    setAnyKeyPressed((prevState) => [
      ...prevState.filter((item) => item !== key)
    ]);
  };

  const areKeysPressed = (keys = [], Pressed = []) => {
    const required = [...keys];

    const anyOrder = required.filter((itemA) => {
      return !Pressed.some((itemB) => itemB === itemA);
    });

    const inOrder =
      required.length === Pressed.length &&
      required.every((value, index) => {
        return value === Pressed[index];
      });

    let result;

    !order ? (result = anyOrder.length === 0) : (result = inOrder);

    return result;
  };

  function Init() {
    useEffect(() => {
      const element = ref.current ? ref.current : ref;

      element.addEventListener("keydown", settings.downHandler);
      element.addEventListener("keyup", settings.upHandler);
      return () => {
        element.removeEventListener("keydown", settings.downHandler);
        element.removeEventListener("keyup", settings.upHandler);
      };
    }, []);
  }

  setData(settings);

  settings.useEffect();

  return settings.output;
}

export default usePressKeys;