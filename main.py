from flask import Flask, render_template, request
from googletrans import Translator

app = Flask(__name__)
HOST = '0.0.0.0'
PORT = 2222
DEBUG = True


@app.route('/', methods=['GET', "POST"])
def index():
    if request.method == 'POST':
        text = request.form['text']
        lang = request.form['lang']
        translator = Translator()
        translation = translator.translate(text, dest=lang)
        return render_template('index.html', text=text, translation=translation.text, lang=lang)
    else:
        return render_template('index.html')


if __name__ == '__main__':
    app.run(host=HOST, port=PORT, debug=DEBUG)
