# coding: utf-8

"""
    Merchant Benchmark API

    Deliver Visa’s data insights and other key analytics to our clients through the Visa Developer Platform

    OpenAPI spec version: v1
    Contact: 
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import sys
import os
import re
import json

# python 2 and python 3 compatibility library
from six import iteritems

from ..configuration import Configuration
from ..api_client import ApiClient


class MerchantBenchmarkApi(object):
    """
    NOTE: This class is auto generated by the swagger code generator program.
    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        config = Configuration()

        if api_client:
            self.api_client = api_client
        else:
            if not config.api_client:
                config.api_client = ApiClient()
            self.api_client = config.api_client

    def postmerchant_benchmark(self, merchant_benchmarkpost_payload, **kwargs):
        """
        Merchant Benchmark
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please define a `callback` function
        to be invoked when receiving the response.
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.postmerchant_benchmark(merchant_benchmarkpost_payload, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param MerchantBenchmarkpostPayload merchant_benchmarkpost_payload: Merchant Benchmark request payload (required)
        :return: MerchantBenchmarkpostResponse
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('callback'):
            return self.postmerchant_benchmark_with_http_info(merchant_benchmarkpost_payload, **kwargs)
        else:
            (data) = self.postmerchant_benchmark_with_http_info(merchant_benchmarkpost_payload, **kwargs)
            return data

    def postmerchant_benchmark_with_http_info(self, merchant_benchmarkpost_payload, **kwargs):
        """
        Merchant Benchmark
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please define a `callback` function
        to be invoked when receiving the response.
        >>> def callback_function(response):
        >>>     pprint(response)
        >>>
        >>> thread = api.postmerchant_benchmark_with_http_info(merchant_benchmarkpost_payload, callback=callback_function)

        :param callback function: The callback function
            for asynchronous request. (optional)
        :param MerchantBenchmarkpostPayload merchant_benchmarkpost_payload: Merchant Benchmark request payload (required)
        :return: MerchantBenchmarkpostResponse
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['merchant_benchmarkpost_payload']
        all_params.append('callback')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method postmerchant_benchmark" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'merchant_benchmarkpost_payload' is set
        if ('merchant_benchmarkpost_payload' not in params) or (params['merchant_benchmarkpost_payload'] is None):
            raise ValueError("Missing the required parameter `merchant_benchmarkpost_payload` when calling `postmerchant_benchmark`")


        collection_formats = {}

        path = '/merchantmeasurement/v1/merchantbenchmark'.replace('{format}', 'json')
        resource_path = 'merchantbenchmark'
        path_params = {}

        query_params = {}

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'merchant_benchmarkpost_payload' in params:
            body_params = params['merchant_benchmarkpost_payload']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.\
            select_header_accept(['application/json'])

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.\
            select_header_content_type(['application/json'])

        # Authentication setting
        auth_settings = ['basicAuth']

        return self.api_client.call_api(path, resource_path, 'POST',
                                        path_params,
                                        query_params,
                                        header_params,
                                        body=body_params,
                                        post_params=form_params,
                                        files=local_var_files,
                                        response_type='MerchantBenchmarkpostResponse',
                                        auth_settings=auth_settings,
                                        callback=params.get('callback'),
                                        _return_http_data_only=params.get('_return_http_data_only'),
                                        _preload_content=params.get('_preload_content', True),
                                        _request_timeout=params.get('_request_timeout'),
                                        collection_formats=collection_formats)

# ----------------------------------------------------------------------------------------------------------------------
# © Copyright 2018 Visa. All Rights Reserved.
#
# NOTICE: The software and accompanying information and documentation (together, the “Software”) remain the property of
# and are proprietary to Visa and its suppliers and affiliates. The Software remains protected by intellectual property
# rights and may be covered by U.S. and foreign patents or patent applications. The Software is licensed and not sold.
#
# By accessing the Software you are agreeing to Visa's terms of use (developer.visa.com/terms) and privacy policy
# (developer.visa.com/privacy). In addition, all permissible uses of the Software must be in support of Visa products,
# programs and services provided through the Visa Developer Program (VDP) platform only (developer.visa.com).
# THE SOFTWARE AND ANY ASSOCIATED INFORMATION OR DOCUMENTATION IS PROVIDED ON AN “AS IS,” “AS AVAILABLE,” “WITH ALL
# FAULTS” BASIS WITHOUT WARRANTY OR CONDITION OF ANY KIND. YOUR USE IS AT YOUR OWN RISK.
# ----------------------------------------------------------------------------------------------------------------------