from flask import Flask, request, jsonify

app = Flask(__name__)

# A dictionary to store user scores
user_scores = {}

@app.route('/submit_score', methods=['POST'])
def submit_score():
    data = request.get_json()
    username = data['username']
    score = data['score']
    user_scores[username] = score
    return jsonify({"message": "Score submitted successfully"})

@app.route('/get_score/<username>', methods=['GET'])
def get_score(username):
    score = user_scores.get(username, 0)
    return jsonify({"username": username, "score": score})

if __name__ == '__main__':
    app.run(debug=True)
