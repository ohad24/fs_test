import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('firestore_cred.json')
firebase_admin.initialize_app(cred)

# cred = credentials.ApplicationDefault()
# firebase_admin.initialize_app(cred, {
#   'projectId': 'neat-tempo-205717',
# })

db = firestore.client()


doc_ref = db.collection('users').document('ohad')

doc = doc_ref.get()
if doc.exists:
    print(f'Document data: {doc.to_dict()}')
else:
    print(u'No such document!')


quit()

print(dir(db.collection('users')))

for i in db.collection('users').get():
    print(i.to_dict())