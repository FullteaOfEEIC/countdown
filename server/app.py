from flask import Flask,render_template
import datetime

app=Flask(__name__)

@app.route("/show")
def show():

    return "Hello World"


if __name__ =="__main__":
    app.run()
