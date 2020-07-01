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
def uploadimages():
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




def json_response(payload, status=200):
 return (json.dumps(payload), status, {'content-type': 'application/json'})

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
    print(raw_json)
    sqlstatement="""
    INSERT INTO testDB.Urls (Url, Headertext, Bodytextrow, Bodyheading, Bodytext, Footertext, Twitterurl, Facebookurl, Instagramurl,Twitterchecked,Facebookchecked,Instagramchecked,Phonenumber,Bodyimages,Headersubtext,frontimage)
    VALUES ('{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}','{}')
    """.format(raw_json['url'],raw_json['headertext'],raw_json['bodytextrow'],bodyheadingtext[:-7],bodytexttext[:-7],raw_json['footertext'],raw_json['twitterurl'],raw_json['facebookurl'],raw_json['instagramurl'],raw_json['twitterchecked'],raw_json['facebookchecked'],raw_json['instagramchecked'],raw_json['phonenumber'],bodyimagestext[:-7],raw_json['headersubtext'],raw_json['frontimage'])
    print(sqlstatement)
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

@app.route('/sqlpoststore', methods=['POST'])
def createstore():
    raw_json = request.get_json()
    sqlstatement="""
    INSERT INTO testDB.storeurl (Url, Headertext, foreignkeyuser)
    VALUES ('{}','{}','{}')
    """.format(raw_json['url'],raw_json['headertext'],raw_json['user'])
    print(sqlstatement)
    sql_GCP_insert(sqlstatement)

    return 'yay',201

@app.route('/sqlretrieveurl', methods=['POST'])
def retrievestore():
    raw_json = request.get_json()
    print(raw_json)
    user=raw_json['user']
    sqlstatement=f" Select Url,id from testDB.storeurl WHERE foreignkeyuser='{user}'"
    print(sqlstatement)
    x=sql_GCP_query(sqlstatement)

    return x,201

@app.route('/sqlpostitem', methods=['POST'])
def additem():
    raw_json = request.get_json()
    print(raw_json)
    sqlstatement="""
    INSERT INTO testDB.Items (category, itemname, price,description,tag,image,foreignid,quantity)
    VALUES ('{}','{}','{}','{}','{}','{}','{}','{}')
    """.format(raw_json['category'],raw_json['itemname'],raw_json['price'],raw_json['description'],raw_json['tag'],raw_json['image'],raw_json['urlselectedid'],raw_json['quantity'])
    print(sqlstatement)
    sql_GCP_insert(sqlstatement)

    return 'yay',201


# @app.route('/sqlpostitemquery', methods=['POST'])
# def retrieveitems():
#     raw_json = request.get_json()
#     user=raw_json['user']
#     sqlstatement=f" Select itemname from testDB.Items WHERE foreignid='{user}'"
#     x=sql_GCP_query(sqlstatement)
#
#     return x,201


@app.route('/deleteitem', methods=['POST'])
def deleteitem():
    raw_json = request.get_json()
    itemname=raw_json['itemselected']
    print(itemname)
    sqlstatement=f" Delete from testDB.Items WHERE itemname='{itemname}'"

    print(sqlstatement)
    sql_GCP_insert(sqlstatement)

    return 'yay',201

@app.route('/sqlpostitemquery', methods=['POST'])
def retrieveallitems():
    raw_json = request.get_json()
    urlid=raw_json['urlselected']
    print(raw_json)
    print(urlid)
    sqlstatement=f" Select * from testDB.Items WHERE foreignid='{urlid}'"
    print('here')
    print(sqlstatement)
    x=sql_GCP_query(sqlstatement)
    print(x)

    return x,201

@app.route('/sqlretrieveurlid', methods=['POST'])
def retrieveurlid():
    raw_json = request.get_json()
    print(raw_json)
    url=raw_json['url']
    sqlstatement=f" Select * from testDB.storeurl WHERE Url='{url}'"
    print(sqlstatement)
    x=sql_GCP_query(sqlstatement)
    print(x)

    return x,201
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

# gets all listings from the database
@app.route('/getAllListings', methods=['POST'])
def getAllListings():
    raw_json = request.get_json()
    sqlstatement="""
    SELECT Headertext, frontimage, Url
    FROM testDB.Urls
    """
    print(sqlstatement)
    x=sql_GCP_query(sqlstatement)
    return x,201

# gets the searched listing from the database
@app.route('/getSearchListing', methods=['POST'])
def getSearchListing():
    raw_json = request.get_json()
    sqlstatement="""
    SELECT Headertext, frontimage, Url
    FROM testDB.Urls
    WHERE Headertext LIKE '%%{}%%'
    OR Bodyheading LIKE '%%{}%%'
    OR Bodytextrow LIKE '%%{}%%'
    """.format(raw_json['search'], raw_json['search'], raw_json['search'])
    print(sqlstatement)
    x=sql_GCP_query(sqlstatement)
    print(x)
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
