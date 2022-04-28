const worker: Worker = self as any;

worker.addEventListener("message", (e) => {
  console.log("Worker Received:", e.data);

  //重たい処理
  //   let count: number = 1;
  //   while (count < 1_000_000_000) {
  //     count++;
  //   }

  worker.postMessage({ result: e.data });
});
