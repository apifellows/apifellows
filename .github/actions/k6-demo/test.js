import http from 'k6/http';
import { group, check, sleep } from 'k6';

// Configure the test to run with 10 requests per second
export const options = {
  iterations: 1,
  log: {
    level: 'warn', // Only log warnings and errors
  },
  thresholds: {
    'http_req_duration': ['p(95)<500'], // 95% of requests must complete below 500ms
  }
};

const baseUrl = 'https://customer-i.bmwgroup.net';

export function setup() {
  // Setup code
}

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function (data) {
    try {
      var res = http.get(baseUrl + '/gcdm/specs');
      
      // Grouping the checks
      group('Status Code Checks', () => {
        check(res, {
          'Status code is 200': r => r.status === 200,
        });
      });

      check(res, {
        'Response': r => (
          r.status === 200 // Check the status code 
        )
      });
    } finally {
      // Log response for debugging
      //console.log(`Response: ${JSON.stringify(res.json(), null, 2)}`);
    }
  }

  export function teardown(data) {
    //Teardown code
    //console.log('done');
  }