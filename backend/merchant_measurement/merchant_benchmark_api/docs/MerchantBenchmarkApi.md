# Merchant Benchmark API
Deliver Visa’s data insights and other key analytics to our clients through the Visa Developer Platform

All URIs are relative to *https://sandbox.api.visa.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postmerchant_benchmark**](MerchantBenchmarkApi.md#postmerchant_benchmark) | **POST** /merchantmeasurement/v1/merchantbenchmark | 


# **postmerchant_benchmark**
> MerchantBenchmarkpostResponse postmerchant_benchmark(merchant_benchmarkpost_payload)



Merchant Benchmark

### Example 
```python
from __future__ import print_statement
import time
from src.apis.merchant_benchmark_api import MerchantBenchmarkApi
from src.configuration import Configuration
from pprint import pprint

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
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_benchmarkpost_payload** | [**MerchantBenchmarkpostPayload**](MerchantBenchmarkpostPayload.md)| Merchant Benchmark request payload | 

### Return type

[**MerchantBenchmarkpostResponse**](MerchantBenchmarkpostResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[Back to top](#)   |   [Back to API list](../README.md#documentation-for-api-endpoints)   |   [Back to Model list](../README.md#documentation-for-models)   |   [Back to README](../README.md)


##Authors
**Visa Developer Platform**
See also the list of [contributors](https://github.com/visa/java-sample-code/graphs/contributors) who participated in this project.

##License
**© Copyright 2018 Visa. All Rights Reserved.**

*NOTICE: The software and accompanying information and documentation (together, the “Software”) remain the property of
and are proprietary to Visa and its suppliers and affiliates. The Software remains protected by intellectual property
rights and may be covered by U.S. and foreign patents or patent applications. The Software is licensed and not sold.*

*By accessing the Software you are agreeing to Visa's terms of use (developer.visa.com/terms) and privacy policy (developer.visa.com/privacy).
In addition, all permissible uses of the Software must be in support of Visa products, programs and services provided
through the Visa Developer Program (VDP) platform only (developer.visa.com). **THE SOFTWARE AND ANY ASSOCIATED
INFORMATION OR DOCUMENTATION IS PROVIDED ON AN “AS IS,” “AS AVAILABLE,” “WITH ALL FAULTS” BASIS WITHOUT WARRANTY OR
CONDITION OF ANY KIND. YOUR USE IS AT YOUR OWN RISK.** All brand names are the property of their respective owners, used for identification purposes only, and do not imply
product endorsement or affiliation with Visa. Any links to third party sites are for your information only and equally
do not constitute a Visa endorsement. Visa has no insight into and control over third party content and code and disclaims
all liability for any such components, including continued availability and functionality. Benefits depend on implementation
details and business factors and coding steps shown are exemplary only and do not reflect all necessary elements for the
described capabilities. Capabilities and features are subject to Visa’s terms and conditions and may require development,
implementation and resources by you based on your business and operational details. Please refer to the specific
API documentation for details on the requirements, eligibility and geographic availability.*

*This Software includes programs, concepts and details under continuing development by Visa. Any Visa features,
functionality, implementation, branding, and schedules may be amended, updated or canceled at Visa’s discretion.
The timing of widespread availability of programs and functionality is also subject to a number of factors outside Visa’s control,
including but not limited to deployment of necessary infrastructure by issuers, acquirers, merchants and mobile device manufacturers.*