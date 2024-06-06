from flask import Flask, render_template, request,jsonify
import model
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

#@app.route('/')
#def man():
#    return render_template('home.html')

@app.route('/test', methods=['POST'])
def home():

    json_data=request.get_json()
    print(json_data)
    car_dict={}

    car_dict["marque"] = json_data['marque']
    car_dict["modele"] =  json_data['modele']
    car_dict["puissance_fiscale"] = int( json_data['puissance_fiscale'])
    car_dict["kilometrage"] = int( json_data['kilometrage'])
    car_dict["annee"] = int( json_data['annee'])
    car_dict["energie"] =  json_data['energie']
    car_dict["boite"] =  json_data['boite']

    pred = model.prediction(car_dict)

    return {"prediction":pred[0]}

@app.route('/health', methods=['GET'])
def health_check():
    try:
        # Perform any necessary checks here (e.g., database connection check)
        
        # If everything is okay, return a success status
        response = {
            'status': 'healthy',
            'message': 'The application is running smoothly.'
        }
        return jsonify(response), 200
    except Exception as e:
        # If there is an issue, return an error status
        response = {
            'status': 'unhealthy',
            'message': str(e)
        }
        return jsonify(response), 500



if __name__ == "__main__":
    app.run(debug=True)














