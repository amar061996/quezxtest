# Quezxtest
API and client side code for quezx assignment

## General
The REST API has been created using Django Rest Framework and the frontend has been created using Angular-4.

## Usuage
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Clone the project to your local computer. You can either download the .zip file or use the command: 

```
git clone https://github.com/amar061996/quezxtest.git
```
### Installing

Once the project is cloned, in order to run the application first the dependencies have to be installed. 

## REST-API
To install the dependencies open cmd and execute
```
cd api
pip install -r requirements.txt
```

Once the dependencies are installed, migrate and create database
```
python manage.py makemigrations
```
```
python manage.py migrate
```
To create superuser:

```
python manage.py createsuperuser
```
To run the app locally
```
python manage.py runserver
```
## Client
To run the angular code locally first install the dependencies by running the following command
```
cd client
npm install
```
Once the dependencies are installed, run the app using the command:
```
ng serve
```
### Contributions
Open to all types of contributions
