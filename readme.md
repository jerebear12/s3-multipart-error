# How To

*Current Bug*
to fix:
Uncaught SyntaxError: The requested module `'/_snowpack/pkg/@aws-crypto.sha1-browser.v2.0.0.js' does not provide an export named 'Sha1' (at @aws-sdk.client-s3.v3.170.0.js:22:10)`

Navigate to:
`\s3-multipart-error\app\node_modules\.cache\snowpack\build\@aws-crypto\sha1-browser@2.0.0\@aws-crypto\sha1-browser.js`

At the bottom of the file change:

~~~~ js
export { Ie11Sha1, WebCryptoSha1, build as __moduleExports };
~~~~

to:

~~~~js
export { Ie11Sha1, WebCryptoSha1 as Sha1, build as __moduleExports };
~~~~

Do the same for Sha256 module in first @aws-crypto folder

to Run:

~~~~powershell
npm install
~~~~

Set region and endpoint in SeaweedUploaderS3API.ts

~~~~powershell
npx snowpack dev --polyfill-node
~~~~
