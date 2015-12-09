var http = require('http');
var ecstatic = require('ecstatic');
var alloc = require('tcp-bind');
var fd = alloc(80);

process.setgid(process.argv[3]);
process.setuid(process.argv[2]);
 
http.createServer(
  ecstatic({ root: __dirname + '/public' })
).listen({ fd: fd });
