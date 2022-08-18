from hashlib import new
from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from .swen_344_db_utils import *

parser = reqparse.RequestParser()
parser.add_argument('name')
parser.add_argument('id')
parser.add_argument('location')
parser.add_argument('genre')
parser.add_argument('yellowcap')
parser.add_argument('redcap')

class NightclubAPI(Resource):
    def get(self):
        nightclubs = []
        result = exec_get_all("SELECT * FROM nightclub")
        for row in result:
            club = {
                "name":row[1], 
                "id":row[0], 
                "location":row[2],
                "genre":row[3],
                "yellowCap":row[4],
                "redCap":row[5]
            }
            nightclubs.append(club) 
        return nightclubs

class AddClubAPI(Resource):
    def post(self):
        sql = """
            INSERT INTO nightclub(name,id,location,genre,yellowcap,redcap) VALUES (%s , %s, %s, %s, %s, %s)
        """
        args = parser.parse_args()
        exec_commit(sql, [args["name"],args["id"],args["location"],args["genre"],args["yellowcap"],args["redcap"]])
        return "Nice"

class EditClubAPI(Resource):
    def put(self,id):
        sql = """
            UPDATE nightclub SET name = %s , id = %s, location = %s, genre = %s, yellowcap = %s, redcap = %s WHERE id=%s
        """
        args = parser.parse_args()
        exec_commit(sql, [args["name"],args["id"],args["location"],args["genre"],args["yellowcap"],args["redcap"], id])
        return "Nice"

class DeleteClubAPI(Resource):
    def delete(self,id):
        sql = """
            DELETE FROM nightclub WHERE id=%s
        """
        exec_commit(sql, [id])
        return "Deleted"
