![alt tag](https://d26a57ydsghvgx.cloudfront.net/www/public/assets/images/logos/zendesk144.png)
# Zendesk Requester App

### Basic application to show how to integrate with zendesk:

[Ticket sidebar application]

### The following information is displayed:

* Requester Name
* Requester location
* Requester icon

---

Web application written in ReactJS
Styles uses sass preprocesor

Uses https://randomuser.me/api/ for getting fake user

---

Note: server part is written in koajs. It is ready for use. Needs to be publicly accessible
When you deploy server part you can remove line 12 and uncomment, commented code.

---

```javascript
const fetchUser = (/*name*/) => {
  // const userName = name.replace(' ', '');
  return new Promise((resolve, reject) => {
    superagent
    // .get(`http://10.222.68.2:1337/api/v0/user/${userName}`)
    .get('https://randomuser.me/api/')
    .use(jsonp)
    .end(function(error, response) {
      if (error) {
        return reject(error);
      }
      return resolve(response.body.results[0]);
    });
  });
};
```

to
```javascript
const fetchUser = (name) => {
  const userName = name.replace(' ', '');
  return new Promise((resolve, reject) => {
    superagent
    .get(`http://10.222.68.2:1337/api/v0/user/${userName}`)
    .use(jsonp)
    .end(function(error, response) {
      if (error) {
        return reject(error);
      }
      return resolve(response.body.results[0]);
    });
  });
};
```
