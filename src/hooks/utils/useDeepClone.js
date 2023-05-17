export default function useDeepClone(data) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port1.postMessage(data);
    port2.onmessage = (msg) => {
      resolve(msg.data);
    };
  });
}
