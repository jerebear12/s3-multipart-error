import { S3Client} from "@aws-sdk/client-s3";
import { Upload } from '@aws-sdk/lib-storage';

async function UploadFile(file: File, fileName: string, onProgress: (progress: number) => void) {
  const s3client = new S3Client({
    region: 'us-east-2',
    endpoint: "http://172.24.177.189:8333",
    credentials: {
      // This works for seaweed
      accessKeyId: "any",
      secretAccessKey: "any"
    }
  });
  const Key = fileName;
  let upload = new Upload({
    client: s3client,
    params: {
      Key: Key,
      Bucket: '1',
      Body: file
    }
  });

  upload.on("httpUploadProgress", (progress) => {
    // Debugging
    console.log("Progress:");
    console.log(progress);
    // Progress
    onProgress(Number(progress.loaded?.toString()))
  });

  const uploadResult = await upload.done();
  // Debugging
  console.log("Done uploading", uploadResult);
}


// Get test input
var input: HTMLInputElement = <HTMLInputElement>document.getElementById("file")

const onSelectedFile = () => {
    var files = input.files
    if (files != null) {
        var file: File = files[0]
        UploadFile(file, file.name, (progress: number) => { console.log(progress) })
    }
}
input.addEventListener('change', onSelectedFile, false)
