# FullStack (FS) Test App

backend: fastapi (python)  
frontend: react served by NGINX  
deploy on gke

Available at [ohad-kube.ddns.net](https://ohad-kube.ddns.net/)

Build using gcloud
```bash
gcloud builds submit --config cloudbuild.yaml .
```

### Todo:
- [ ] Backend Auth with Firestore.
- [ ] Set SSL kubernetes secret as declarative YAML (web-tls)
- [ ] Frontend Auth
- [ ] Authorization ?
- [ ] Private Twitter App
- [ ] Twitter Bot ?
- [ ] [Knesset](https://main.knesset.gov.il/Activity/Info/pages/databases.aspx) Project ?


## Development
Run uvicorn from root directory `uvicorn src.app.app:app --reload`.

## Secrests
```bash
kubectl create secret generic firebase-sa-token --from-file=./secrets/fb/firestore_cred.json
kubectl create secret generic application-secret-key --from-file=./secrets/key/APPLICATION_SECRET_KEY
```
