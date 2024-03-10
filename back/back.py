from flask import Flask, request, jsonify
from flask_cors import CORS
from test import mail

app = Flask(__name__)
app.secret_key = "hanuri"

CORS(app)

send_mail = mail()

def kakao() :
    print("hi, It's kakao message test.")
    return

def mail(received_data) :
    send_mail.make_content(received_data)
    return

@app.route('/', methods = ['POST'])
def send():
    if request.method == 'POST' :
        input_data = request.json
        data = {
            'r' : input_data.get('range'),
            'h' : input_data.get('height'),
            'w' : input_data.get('weight'),
            't' : input_data.get('texture'),
            'c' : input_data.get('count'),
            'type' : input_data.get('type'),
            'e' : input_data.get('etc'),
            'p' : input_data.get('contact')
        }
        print(data)
        mail(data)
        
        return jsonify({'success' : True})


if __name__ == "__main__" :
    # app.run(port = 5000)
    app.run(debug = False, host = '0.0.0.0')