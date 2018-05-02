# -*- coding: utf-8 -*-
# author: itimor

from rest_framework import serializers


class ZbHostSerializer(serializers.Serializer):
    hostid = serializers.IntegerField()
    host = serializers.CharField()
    status = serializers.CharField()
    groups = serializers.JSONField()
    interfaces = serializers.JSONField()


class ZbHostGroupSerializer(serializers.Serializer):
    groupid = serializers.IntegerField()
    name = serializers.CharField()


class ZbTemplateSerializer(serializers.Serializer):
    templateid = serializers.IntegerField()
    host = serializers.CharField()
