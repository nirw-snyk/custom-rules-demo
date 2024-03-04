import requests

#url = 'http://example.com/api/data'
response = requests.get('http://example.com/api/data')

if response.status_code == 200:
    print(response.text)
else:
    print(f'Request failed with status code {response.status_code}')


response = requests.post('http://example.com/api/data')

if response.status_code == 200:
    print(response.text)
else:
    print(f'Request failed with status code {response.status_code}')

response = requests.put('http://example.com/api/data')

if response.status_code == 200:
    print(response.text)
else:
    print(f'Request failed with status code {response.status_code}')    