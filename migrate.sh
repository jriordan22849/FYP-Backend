#!/usr/bin/env bash

cd mySite
python3 manage.py makemigrations
python3 manage.py migrate

./manage.py runserver 0.0.0.0:8000
