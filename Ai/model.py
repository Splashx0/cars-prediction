import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_squared_error, mean_absolute_error, mean_squared_error
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import make_pipeline
import math
import pickle


def prediction(single_car):
    cars = pd.read_csv('clean_final.csv')
    cars = cars.drop_duplicates()
    print("cars number : ",len(cars))

    cars['energie'] = cars['energie'].replace('Hybride essence', 'Hybride')
    cars['energie'] = cars['energie'].replace('Hybride rechargeable essence', 'Hybride')
    cars['energie'] = cars['energie'].replace('Hybride rechargeable diesel', 'Hybride')
    cars['energie'] = cars['energie'].replace('Hybride diesel', 'Hybride')

    s1 = cars.shape
    clean = cars[['puissance_fiscale', 'kilometrage', 'annee', 'prix']]
    for i in clean.columns:
        qt1 = cars[i].quantile(0.25)
        qt3 = cars[i].quantile(0.75)
        iqr =  qt3 - qt1
        lower = qt1-(1.5*iqr)
        upper = qt3+(1.5*iqr)
        min_in = cars[cars[i]<lower].index
        max_in = cars[cars[i]>upper].index
        cars.drop(min_in, inplace = True)
        cars.drop(max_in, inplace = True)
    s2 = cars.shape
    outliers = s1[0] - s2[0]
    print("Deleted outliers are : ", outliers)


    cat_features = ['marque', 'modele', 'energie', 'boite']
    cars2 = pd.get_dummies(cars, columns = cat_features)
    X = cars2.drop('prix', axis = 1)
    y = cars2['prix']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 1)
    #sc = StandardScaler()
    #X_train = sc.fit_transform(X_train)
    #X_test = sc.transform(X_test)
    rfr = RandomForestRegressor(n_estimators = 100)
    rfr_algo = make_pipeline(rfr)

    rfr_algo.fit(X_train, y_train)
    rfr_pred = rfr_algo.predict(X_test)

    print('R2 Score is : ', r2_score(y_test, rfr_pred))
    print('Mean squared error is : ', math.sqrt(mean_squared_error(y_test, rfr_pred)))
    print('Mean Absolute error is : ', mean_absolute_error(y_test, rfr_pred))


    pred_df=pd.DataFrame({'Actual Value':y_test,'Predicted Value':rfr_pred,'Difference':y_test-rfr_pred})
    pred_df['Percentage Difference'] = ((pred_df['Difference'] / pred_df['Actual Value']) * 100).round(2)
    pred_df

    pred_df.to_csv('predictions.csv', index=False)


    # Assuming 'single_car_data' is a dictionary or a pandas DataFrame containing data for a single car

    # Create a DataFrame for the single car data
    single_car_df = pd.DataFrame(single_car, index=[0])
    #print(single_car_df)

    # Get dummy variables for categorical features
    single_car_encoded = pd.get_dummies(single_car_df, columns=cat_features)
    #print(single_car_encoded)

    # Align the columns with the training data
    missing_cols = set(X_train.columns) - set(single_car_encoded.columns)
    for col in missing_cols:
        single_car_encoded[col] = 0

    #Reorder columns to match training data
    single_car_encoded = single_car_encoded[X_train.columns]

    prediction = rfr_algo.predict(single_car_encoded)
    print("Predicted price for the single car:", prediction[0])
    return prediction


#prediction({
#        'marque': 'BMW',
#        'modele': 'Serie 5',
#        'puissance_fiscale':6,
#        'kilometrage':15000,
#       'energie': 'Essence',
#        'annee':2021,
#        'boite': 'Automatique'
#    })

