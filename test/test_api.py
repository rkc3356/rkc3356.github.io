import unittest
import json

from requests import delete
from rest_utils import *

class TestExample(unittest.TestCase):
    def test_api(self):
        result = get_rest_call(self, 'http://127.0.0.1:5000/')
        self.assertEqual("Arcane", result[0]["id"],"Should have returned clubs")