from flask import Flask, render_template, request
import model

app = Flask(__name__)

@app.route('/')
def man():
    return render_template('home.html')


@app.route('/predict', methods=['POST'])
def home():
    car_dict={}
    car_dict["marque"] = request.form['marque']
    car_dict["modele"] = request.form['modele']
    car_dict["puissance_fiscale"] = int(request.form['puissance_fiscale'])
    car_dict["kilometrage"] = int(request.form['kilometrage'])
    car_dict["annee"] = int(request.form['annee'])
    car_dict["energie"] = request.form['energie']
    car_dict["boite"] = request.form['boite']

    pred = model.prediction(car_dict)

    return render_template('home.html', data=pred)


if __name__ == "__main__":
    app.run(debug=True)














