import logging
import os

from flask import Flask, json, g, request,jsonify
from google.cloud import storage
from sqlalchemy import create_engine
from flask_cors import CORS
import random
import string

def randomString(stringLength=8):
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(stringLength))

def sql_GCP_insert(sqlstring):
    engine = create_engine('mysql+pymysql://root:Visa1234@34.87.113.249:3306/testDB')
    connection = engine.connect()
    connection.execute(sqlstring)
    connection.close()

def sql_GCP_query(sqlstring):
    engine = create_engine('mysql+pymysql://root:Visa1234@34.87.113.249:3306/testDB')
    with engine.connect() as con:

        rs = con.execute(sqlstring)
        d, listOfStr = {}, []
        for rowproxy in rs:
            # rowproxy.items() returns an array like [(key0, value0), (key1, value1)]
            for column, value in rowproxy.items():
                # build up the dictionary
                d = {**d, **{column: value}}
            listOfStr.append(d)
    dictOfWords = { i : listOfStr[i] for i in range(0, len(listOfStr) ) }

    return dictOfWords



app = Flask(__name__)
CORS(app)

# Configure this environment variable via app.yaml
CLOUD_STORAGE_BUCKET = 'here_myname'


def sql_GCP(sqlstring):
    engine = create_engine('mysql+pymysql://postgres:Visa1234@146.148.58.130:3306/innovatingvisa')
    connection = engine.connect()
    connection.execute(sqlstring)
    connection.close()


@app.route('/')
def index():
    return """
<form method="POST" action="/upload" enctype="multipart/form-data">
    <input type="file" name="file">
    <input type="submit">
</form>
"""


@app.route('/upload-image', methods=['POST'])
def upload():
    """Process the uploaded file and upload it to Google Cloud Storage."""
    listurls=[]
    for i in range(len(request.files)):
        print(i)
        uploaded_file = request.files.get(str(i))
        print(uploaded_file)
        if not uploaded_file:
            return 'No file uploaded.', 400

        # Create a Cloud Storage client.
        gcs = storage.Client.from_service_account_json('key.json')

        # Get the bucket that the file will be uploaded to.
        bucket = gcs.get_bucket(CLOUD_STORAGE_BUCKET)

        # Create a new blob and upload the file's content.
        blob = bucket.blob(randomString())

        blob.upload_from_string(
            uploaded_file.read(),
            content_type=uploaded_file.content_type
        )
        listurls.append(blob.public_url)
    # The public URL can be used to directly access the uploaded file via HTTP.
    return json_response(listurls)


@app.route('/urls', methods=['get'])
def upload2():

    return json_response('boo')

@app.route('/here', methods=['get'])
def upload3():

    return json_response('boo')

def json_response(payload, status=200):
 return (json.dumps(payload), status, {'content-type': 'application/json'})

@app.route('/sqlpost', methods=['POST'])
def postsql():
    raw_json = request.get_json()
    sqlstatement=raw_json['sql']
    sql_GCP_insert(sqlstatement)

    return 'yay',201

@app.route('/sqlposturl', methods=['POST'])
def postsqlurl():
    raw_json = request.get_json()
    bodyheading=raw_json['bodyheading']
    bodytext=raw_json['bodytext']
    bodyimages=raw_json['bodyimages']

    bodytexttext=''
    bodyheadingtext=''
    bodyimagestext=''
    for i in bodyheading:
        bodyheadingtext+=i+'(split)'
    for i in bodytext:
        bodytexttext+=i+'(split)'
    for i in bodyimages:
        bodyimagestext+=i+'(split)'
    sqlstatement="""
    INSERT INTO testDB.Urls (Url, Headertext, Bodytextrow, Bodyheading, Bodytext, Footertext, Twitterurl, Facebookurl, Instagramurl,Twitterchecked,Facebookchecked,Instagramchecked,Phonenumber,Bodyimages)
    VALUES ('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')
    """.format(raw_json['url'],raw_json['headertext'],raw_json['bodytextrow'],bodyheadingtext[:-7],bodytexttext[:-7],raw_json['footertext'],raw_json['twitterurl'],raw_json['facebookurl'],raw_json['instagramurl'],raw_json['twitterchecked'],raw_json['facebookchecked'],raw_json['instagramchecked'],raw_json['phonenumber'],bodyimagestext[:-7])
    print(sqlstatement)
    sql_GCP_insert(sqlstatement)

    return 'yay',201

@app.route('/sqlposturlquery', methods=['POST'])
def postsqlurlquery():
    raw_json = request.get_json()
    url=raw_json['url']
    sqlstatement=f" Select * from testDB.Urls WHERE Url='{url}'"
    print(sqlstatement)


    x=sql_GCP_query(sqlstatement)
    try:
        x=x[0]
        x['Bodytext']=x['Bodytext'].split('(split)')
        x['Bodyheading']=x['Bodyheading'].split('(split)')
        x['Bodyimages']=x['Bodyimages'].split('(split)')
    except:
        return 'Nth',404

    return x,201

@app.route('/sqlpostquery', methods=['POST'])
def postsqlquery():
    raw_json = request.get_json()
    sqlstatement=raw_json['sql']
    x=sql_GCP_query(sqlstatement)

    return x,201

@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return """
    An internal error occurred: <pre>{}</pre>
    See logs for full stacktrace.
    """.format(e), 500


if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1', port=8000, debug=True)
