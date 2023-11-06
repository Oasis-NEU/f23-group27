import os
import random
from Spotipy import Spotipy
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/test')
def test():
    return "YOU STUPID ...."


@app.route('/get')
def get_random_info():
    cache_path = os.path.expanduser("~/.cache/my_spotify_app/")  # makes cache
    os.makedirs(cache_path, exist_ok=True)

    CLIENT_ID = os.environ.get("CLIENT_ID")
    CLIENT_SECRET = os.environ.get("CLIENT_SECRET")
    SCOPE = "user-read-playback-state playlist-modify-public user-top-read user-read-recently-played"

    sp = Spotipy(CLIENT_ID, CLIENT_SECRET, SCOPE, cache_path)
    sp.authenticate_user()

    tracks = sp.get_current_user_recently_played(limit=50)
    song_index = random.randint(0, len(tracks) - 1)

    # Randomly chooses one of the 50 most recently played tracks
    chosen_track_id = tracks[song_index]
    track_info = sp.get_track_info(chosen_track_id)
    return jsonify(track_info)

if __name__ == '__main__':
    app.run(debug=True)





