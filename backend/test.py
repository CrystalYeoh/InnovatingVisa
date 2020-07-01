from sqlalchemy import create_engine

def sql_GCP_Insert(sqlstring):
    engine = create_engine('mysql+pymysql://root:Visa1234@34.87.113.249:3306/testDB')
    with engine.connect() as con:

        rs = con.execute(sqlstring)
        print(list(rs))


# sql_GCP("""CREATE TABLE Persons (
#     PersonID int,
#     LastName varchar(255),
#     FirstName varchar(255),
#     Address varchar(255),
#     City varchar(255)); """)
<<<<<<< HEAD
sql_GCP("""SELECT * FROM STATION;""")
=======
# sql_GCP("""SELECT * FROM STATION;""")
>>>>>>> master
