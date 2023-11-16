from flask import Flask, Blueprint
from student_blueprint import student_routes
 
app = Flask(__name__)
app.register_blueprint(student_routes, url_prefix="/eventhosting/students")
 
@app.route('/')
def hello_world():
    return 'Hello World'

 
# main driver function
if __name__ == '__main__':
 
    # run() method of Flask class runs the application 
    # on the local development server.
    app.run(debug=True)