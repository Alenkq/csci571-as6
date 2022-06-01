from flask import Flask, current_app, request
import requests
import json
import time

app = Flask(__name__)

@app.route('/')
def index():
    return current_app.send_static_file('j1a1c7ka6s.html')

@app.route('/searching', methods=['GET'])
def searching():

    # search_text = request.form['info']
    search_text = request.args.get('info')
    auth_url = 'https://api.artsy.net/api/tokens/xapp_token'
    auth_para = {'client_id': '1ced6e79290f0e7f54ee', 'client_secret': '004b92f37b09786daf4cbd6935e15e48'}
    auth_resp = requests.post(auth_url, data= auth_para)
    auth_dict = json.loads(auth_resp.text)
    XAPP = auth_dict['token']

    # time.sleep(2)
    search_url = 'https://api.artsy.net/api/search?q=%s&size=10'
    search_text = search_text.replace(' ', '+')
    search_url = search_url % search_text
    search_header = {'X-XAPP-Token': XAPP}
    search_resp = requests.get(search_url, headers= search_header)
    search_json = search_resp.json()

    # with open('../data.json', 'w') as f:
    #     json.dump(search_json, f)

    return search_json

if __name__ == '__main__':
    app.run(host= '127.0.0.1', port= 8080, debug= True)