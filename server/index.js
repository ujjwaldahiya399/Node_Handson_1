let http = require("http");
let app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    res.write(
      "<h1>Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.</h1>"
    );
    res.end();
  } else if (req.url === "/data") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    const data = {
      message:
        "Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.",
      timeStamp: new Date().toISOString(),
    };
    res.write(JSON.stringify(data));
    res.end();
  } else {
    res.statusCode = 404;
    res.write("<h1>404, Not found</h1>");
    res.end();
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`app is on port  ${port}`);
});
