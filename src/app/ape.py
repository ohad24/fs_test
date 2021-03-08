import requests


headers = {'content-type': 'application/json'}

# base_url = "https://ohad-kube.ddns.net/backendservice1"
base_url = "https://ohad-kube.ddns.net/api/v1/"
# base_url = "http://localhost:8000/api/v1/backendservice1"
# base_url = "http://localhost:8000/api/v1/"


# r = requests.get(base_url, headers=headers)

# print(r.text)
# print(r.status_code)
# print(r.headers)
# quit()

token_url = base_url + 'token'

print(token_url)

# data = {'username': 'yosi', 'password': '2345'}
data = {'username': 'ohad', 'password': '12341'}

r = requests.post(token_url, data=data)

print(r.status_code)
if r.status_code != 200:
    print(r.text)
    quit()

access_token = r.json().get('access_token')

print(access_token)
# quit()

users_url = base_url + 'users/me/'

headers = {'Authorization': f'Bearer {access_token}'}

r = requests.get(users_url, headers=headers)

print(r.status_code)
print(r.text)
