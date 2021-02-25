# Learn Django

## Table of Contents

- [Learn Django](#learn-django)
  - [Table of Contents](#table-of-contents)
    - [What is Framework](#what-is-framework)
    - [What is Web Framework](#what-is-web-framework)
    - [Model View Template (MVT)](#model-view-template-mvt)
    - [Introduction to Django](#introduction-to-django)
    - [Requirements for Learning Django](#requirements-for-learning-django)
    - [Install Django in Virtual Environment and Create Django Project](#install-django-in-virtual-environment-and-create-django-project)

### What is Framework

A framework is a set of conceptual structure and guidelines, used to build something useful. As a programmer, you don’t need to start from scratch when you have tools designed to help you with your projects. Frameworks are software that is developed and used by developers to build applications.

```text
Finally a framework is may include predefined classes and functions that can be used to process input,
manage hardware devices, and interact with system software.
```

**Why use framework**:

1. Collection of tools
2. No need to start from scratch
3. Save time
4. Improve productivity
5. Clean code
6. Reuseable code
7. Testing
8. Debugging

### What is Web Framework

A `Web Framework` (WF) or `Web Application Framework` which helps to build web applications.

- Laravel
- Codeigniter
- Zend
- Django
- Spring

### Model View Template (MVT)

`MVT` is a design pattern that separates an application into three main logical components **Model**, **View**, **Template**

`Model`: The model responsible to handle database. It is a data access layer which handles the data.

`View`: The use can send request by interacting with **template**, the view handles these requests and sends to **model** then get appropriate response from **model**, sends response to template.

`Template`: It represents how data should be presented to the application user. User can read or write data from the template.

![images](images/1.png)

- **View**:
  - Server side logic
  - Process GET/POST
  - Get data from the User
  - Get data from the Model
  - Pass data to Template
- **Model**:
  - Process Data
  - Insert/Update DB
  - Communicate with View
- **Template**:
  - User Interface
  - HTML/CSS
  - Get data from View

### Introduction to Django

**Django** is free, open-source Python based High-Level **Web Framework**. Follow **MVT** architecture.

Build on Django:

- Youtube
- Instagram
- Bitbucket
- NASA
- Softify

### Requirements for Learning Django

- HTML
- CSS
- JavaScript
- SQL
- Python
- MVT
- PIP
- Bootstrap

### Install Django in Virtual Environment and Create Django Project

```console
root@admin: ~$ python3 --version
Python 3.8.1

root@admin: ~$ django-admin --version
.... Install or not? ...

# create virtual env first
# install django
root@admin: ~$ pip install django
```

**Django Project**: A Django project may  contain multiple project **application**, which means a group of application and files is called as Django project.

> An application is a part of Django project.

**Demo**:

- SchoolProject
  - Registration App
  - Fees App
  - Exam App
  - Attendance App
  - Result App

**Create and Django Project**:

```console
# Syntax
# django-admin startproject project_name
# example
root@admin: ~$ django-admin startproject schoolproject

# go inside the schoolproject
root@admin: ~$ cd schoolproject
root@admin: ~$ ls
manage.py*  schoolproject/

# run django project
root@admin: ~$ python manage.py runserver
February 25, 2021 - 03:52:50
Django version 3.1.5, using settings 'schoolproject.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```
