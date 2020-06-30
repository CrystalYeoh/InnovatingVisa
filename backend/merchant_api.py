
from __future__ import print_function
import os
import sys
import unittest
import datetime
import pytz
import random
import string
import re
import json

from merchant_measurement.merchant_benchmark_api.src.apis.merchant_benchmark_api import MerchantBenchmarkApi
from merchant_measurement.merchant_benchmark_api.src.configuration import Configuration
from merchant_measurement.merchant_benchmark_api.globalConfig import GlobalConfig

globalConfig = GlobalConfig()
config = Configuration()
config.username = 'N2OJZRQQFD6BTH5VJOK721dvADC3Oqj3RJBr4SFQpP9PB2ULo'
config.password = 'tzmw7eQS26mr8'
config.cert_file = '/absolute/path/to/cert.pem'
config.key_file = '/absolute/path/to/key_90012af2-1e19-491c-b9e6-6aba4341f37c.pem'
config.ssl_ca_cert = '/absolute/path/to/DigiCertGlobalRootCA.crt'
self.api = MerchantBenchmarkApi(None)
