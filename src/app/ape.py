import requests

url = 'http://localhost:8000/token'

data = {'username': 'johndoe', 'password': 'secret'}

r = requests.post(url, data=data)

print(r.status_code)
if r.status_code != 200:
    quit()

access_token = r.json().get('access_token')

users_url = 'http://localhost:8000/users/me/'

headers = {'Authorization': f'Bearer {access_token}'}

r = requests.get(users_url, headers=headers)

print(r.status_code)
print(r.json())