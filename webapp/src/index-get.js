console.log('Gets data from DynamoDB table')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'});

exports.handler = function(event, context, callback){
    console.log('Version 3 processing event: %j', event);

    let scanningParameters = {
        TableName: 'CloudProviders',
        Limit: 100 //maximum result of 100 items
    };
   
    //In dynamoDB scan looks through your entire table and fetches all data
    docClient.scan(scanningParameters, function(err,data){
        if (err) {
            callback(err,null);
        }else{
            callback(null, data);
        }
    });
}
