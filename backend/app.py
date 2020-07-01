import logging
import os

from flask import Flask, request
from google.cloud import storage
from sqlalchemy import create_engine
from flask_cors import CORS



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


@app.route('/upload', methods=['POST'])
def upload():
    """Process the uploaded file and upload it to Google Cloud Storage."""
    uploaded_file = request.files.get('file')

    if not uploaded_file:
        return 'No file uploaded.', 400

    # Create a Cloud Storage client.
    gcs = storage.Client.from_service_account_json('key.json')

    # Get the bucket that the file will be uploaded to.
    bucket = gcs.get_bucket(CLOUD_STORAGE_BUCKET)

    # Create a new blob and upload the file's content.
    blob = bucket.blob(uploaded_file.filename)

    blob.upload_from_string(
        uploaded_file.read(),
        content_type=uploaded_file.content_type
    )

    # The public URL can be used to directly access the uploaded file via HTTP.
    return blob.public_url

@app.route('/sqlpost', methods=['POST'])
def postsql():
    raw_json = request.get_json()
    sqlstatement=raw_json['sql']
    sql_GCP_insert(sqlstatement)

    return 'yay',201

@app.route('/merchantSignUp', methods=['POST'])
def merchant_signup():
    raw_json = request.get_json()
    print(raw_json)
    sqlstatement="""
    INSERT INTO testDB.Merchants (firstName, lastName, email, companyName, password, descr, addr, merchType, contactNo)
    VALUES ('{}','{}','{}','{}','{}','{}','{}','{}','{}')
    """.format(raw_json['firstName'],raw_json['lastName'],raw_json['email'],raw_json['companyName'],raw_json['password'],raw_json['descr'],raw_json['addr'],raw_json['merchType'],raw_json['contactNo'])
    sql_GCP_insert(sqlstatement)

    return 'yay',201

@app.route('/visaLogin',methods=['POST'])
def visa_login():
    raw_json = request.get_json()
    print(raw_json)
    sqlstatement=""" """
    sql_GCP_insert(sqlstatement)
    return 'wabalabadubdub',201

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
