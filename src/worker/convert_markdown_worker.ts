import * as marked from 'marked';
import * as sanitizeHtml from 'sanitize-html';

const worker: Worker = self as any;

worker.addEventListener('message', (e) => {
  // console.log("Worker Received:", e.data);

  //重たい処理
  //   let count: number = 1;
  //   while (count < 1_000_000_000) {
  //     count++;
  //   }

  // worker.postMessage({ result: e.data });

  const text = e.data;
  // const html = marked(text);
  const html = sanitizeHtml(marked(text), {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'h1', 'h2'],
  });
  worker.postMessage({ html });
});
