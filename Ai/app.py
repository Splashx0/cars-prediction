from flask import Flask

app = Flask(__name__)

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














