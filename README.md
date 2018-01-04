# Demo Project untuk Tutorial Routing ReactJS

Demo app: https://ab-react-routing.herokuapp.com/ 

https://www.youtube.com/watch?v=dMdS87rd9Dc


## Command

### NPM Scripts

>Kalo pake NPM, ganti "yarn" dgn "npm run"

- Jalanin server lokal untuk testing *production* build: `yarn lite-server`
- Jalanin webpack dev server: `yarn wd-server`
- Testing pake Jest: `yarn test`
- Build versi dev (ada sourcemaps) : `yarn build:dev`
- Build versi production : `yarn build:production`
- Optimasi file gambar: `gulp images:optimise`

### DEPLOY HEROKU

- Bikin dulu app di Heroku: `heroku create <nama-app>`, mis. `heroku create myweb`. 
  Perintah ini otomatis bikin Git repo & nambahin entri `remote` di git config lokal.
- Push ke remote: `git push heroku`
- Untuk deploy ke heroku dari non-master branch: 
    - Bikin branch: `git checkout -b experiment-branch`
    - Bikin app baru, beda dgn yg di master: `heroku create experiment-app` Nama app & branch nggak harus sama.
    - Tambahin entry git remote: `git remote add experiment-app <URL ke Git repo Heroku>`
    - Deploy: `git push experiment-app experiment-branch:master`
    - App bisa diakses di: `https://experiment-app.herokuapp.com`


