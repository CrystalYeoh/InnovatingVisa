from __future__ import print_function
import time
from src.apis.merchant_benchmark_api import MerchantBenchmarkApi
from src.configuration import Configuration

config = Configuration()
# Uncomment this block to enable proxy
# config.proxy_url = 'PROXY_URL'

# Configure HTTP basic authorization: basicAuth
config.username = 'YOUR_USERNAME'
config.password = 'YOUR_PASSWORD'
config.cert_file = 'ABSOLUTE_PATH_TO_CERT_FILE'
config.key_file = 'ABSOLUTE_PATH_TO_KEY_FILE'
config.ssl_ca_cert = 'ABSOLUTE_PATH_TO_CA_CERT_FILE'

# Unblock this block to configure MLE credentials
# config.api_key['keyId'] = 'YOUR_KEY_ID'
# config.encryption_public_key_path = 'ABSOLUTE_PATH_TO_MLE_CERT_FILE'
# config.decryption_private_key_path = 'ABSOLUTE_PATH_TO_MLE_KEY_FILE'

# create an instance of the API class
api_instance = MerchantBenchmarkApi()

# Set all the required parameters in the postmerchant_benchmark. Look at the documentation for further clarification.
merchant_benchmarkpost_payload = src.MerchantBenchmarkpostPayload() # MerchantBenchmarkpostPayload | Merchant Benchmark request payload

try:
    api_response = api_instance.postmerchant_benchmark(merchant_benchmarkpost_payload)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MerchantBenchmarkApi->postmerchant_benchmark: %s\n" % e)
