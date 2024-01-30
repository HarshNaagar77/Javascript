**Introduction:**
This project demonstrates how to fetch random user data from an external API using JavaScript and the XMLHttpRequest (XHR) object. The code is written in an HTML file with an embedded JavaScript script.
**JavaScript Code:**
   - The JavaScript code starts by defining a constant `url` that stores the endpoint of the random user API.
   - An XHR object is created using `new XMLHttpRequest()`.
   - The `open()` method is called on the XHR object to specify the HTTP method (GET) and the API URL.
   - The `onreadystatechange` event handler is defined to handle the response from the API.
   - Inside the event handler, the `readyState` property of the XHR object is checked. When it reaches the value 4, it indicates that the response is ready.
   - The `responseText` property of the XHR object contains the response data in JSON format.
   - The response data is parsed into a JavaScript object using `JSON.parse()`.
   - The gender, first name, and last name of the first user in the response are extracted and logged to the console using `console.log()`.

**Output:**
When the HTML file is opened in a web browser, the JavaScript code executes and fetches the random user data from the API. The gender, first name, and last name of the first user are displayed in the browser's console.

