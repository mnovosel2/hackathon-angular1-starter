class UploadController {
    constructor() {


    }
    upload(file) {
        AWS.config.update({
            accessKeyId: 'AKIAJVALHXPU7ZIN22UQ',
            secretAccessKey: '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'
        });
        AWS.config.region = 'eu-west-1';
        var bucket = new AWS.S3({
            params: {
                Bucket: 'worxcorebucket'
            }
        });
        if (file) {
            var uniqueFileName = file.name;

            var params = {
                Key: uniqueFileName,
                ContentType: file.type,
                Body: file,
                ServerSideEncryption: 'AES256'
            };

            bucket.putObject(params, function(err, data) {
                    if (err) {
                       console.log(err.message, err.code);
                        return false;
                    } else {
                        // Upload Successfully Finished
                        console.log('File Uploaded Successfully', 'Done');
                    }
                })
                .on('httpUploadProgress', function(progress) {
                     
                });
        } else {
            console.log('No file');
        }
    }
}
export {UploadController};
