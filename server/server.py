from flask import Flask
from flask_restful import Resource, Api


from api.swen_344_db_utils import *
from api.nightclub import *

app = Flask(__name__) #create Flask instance

api = Api(app) #api router

api.add_resource(NightclubAPI,'/clubs')
api.add_resource(AddClubAPI,'/addclub')
api.add_resource(EditClubAPI,'/clubs/<id>')
api.add_resource(DeleteClubAPI,'/clubs/<id>')

if __name__ == '__main__':
    print("Loading db");
    rebuild_tables()
    print("Starting flask");
    app.run(debug=True), #starts Flask
