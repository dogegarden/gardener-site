import io, { Socket } from "socket.io-client";

const socket = io("");

export const establishConnection = async (): Promise<boolean> => {
  let connectionDidEstablish: boolean = false;
  let retryCount: number = 5;

  const connection = new Promise((resolve, reject) => {
    socket.on("connect", () => {
      resolve(true);
    });
    retryCount++;
  });

  do {
    const didEstablish = connection.then((didConnect: boolean) => didConnect);
  } while (retryCount == 0 && !connectionDidEstablish);

  return connectionDidEstablish;
};
