from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "hanuri"

CORS(app)

def kakao() :
    print("hi, It's kakao message test.")
    return

def mail() :
    print("hi, It's send mail test.")
    return

@app.route('/', methods = ['POST'])
def send():
    print("hi, It's test")

    return

if __name__ == "__main__" :
    app.run(port = 80)
    app.run(debug = False, host = '0.0.0.0')