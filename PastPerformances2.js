import { readRemoteFile } from 'react-papaparse'

var url = 'https://test.com';

readRemoteFile(
  url,
  {
    complete: (results) => {
      console.log('Results:', results)
    }
  }
)
