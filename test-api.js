const http = require('http');

// Test GET /
console.log('Testing GET /');
http.get('http://localhost:3000/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log(`Status: ${res.statusCode}`);
        console.log(`Response: ${data}\n`);
    });
}).on('error', (err) => console.log(`Error: ${err.message}`));

// Test POST /user with valid data
setTimeout(() => {
    console.log('Testing POST /user with valid data');
    const postData = JSON.stringify({ fname: 'John', email: 'john@example.com' });
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/user',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };
    
    const req = http.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            console.log(`Status: ${res.statusCode}`);
            console.log(`Response: ${data}\n`);
        });
    });
    
    req.on('error', (err) => console.log(`Error: ${err.message}`));
    req.write(postData);
    req.end();
}, 500);

// Test POST /user with missing data
setTimeout(() => {
    console.log('Testing POST /user with missing data (should return 400)');
    const postData = JSON.stringify({ fname: 'Jane' }); // missing email
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/user',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };
    
    const req = http.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            console.log(`Status: ${res.statusCode}`);
            console.log(`Response: ${data}\n`);
        });
    });
    
    req.on('error', (err) => console.log(`Error: ${err.message}`));
    req.write(postData);
    req.end();
}, 1000);

// Test GET /user/:id
setTimeout(() => {
    console.log('Testing GET /user/123');
    http.get('http://localhost:3000/user/123', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            console.log(`Status: ${res.statusCode}`);
            console.log(`Response: ${data}\n`);
        });
    }).on('error', (err) => console.log(`Error: ${err.message}`));
}, 1500);

// Test static HTML
setTimeout(() => {
    console.log('Testing static HTML at /');
    http.get('http://localhost:3000/', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            console.log(`Status: ${res.statusCode}`);
            console.log(`Is HTML: ${data.includes('DOCTYPE')}\n`);
        });
    }).on('error', (err) => console.log(`Error: ${err.message}`));
}, 2000);

setTimeout(() => process.exit(0), 3000);
