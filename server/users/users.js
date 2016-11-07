import superagent from 'superagent';
import jsonp from 'superagent-jsonpx';

const uri = 'https://randomuser.me/api/';

export const fetchUser = (userName) => {
  return new Promise((resolve, reject) => {
    superagent.get(uri)
      .use(jsonp())
      .end((error, response) => {
        if (error) {
          return reject(error.message);
        }
        const user = response.body.results[0];
        return resolve(Object.assign({},
          user, { name: Object.assign({},
            user.name, { fullName: userName }) }
        ));
      });
  });
};

export const getUser = async function getUser() {
  const { userName } = this.params;
  this.body = await fetchUser(userName);
  this.status = 201;
};
