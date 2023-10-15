import os
import random
import requests
from io import BytesIO
from pydub import AudioSegment
from pydub.playback import play
from ImageBlur import ImageBlur
from Spotipy import Spotipy


CLIENT_ID = os.environ.get("CLIENT_ID")
CLIENT_SECRET = os.environ.get("CLIENT_SECRET")
SCOPE = "user-read-playback-state playlist-modify-public user-top-read user-read-recently-played"

sp = Spotipy(CLIENT_ID,CLIENT_SECRET,SCOPE)
sp.authenticate_user()


tracks = sp.get_current_user_recently_played(limit=50)
song_index = random.randint(0,len(tracks)-1)

#Randomly chooses one of the 50 most recently played tracks
chosen_track_id = tracks[song_index]
track_info = sp.get_track_info(chosen_track_id)

print(track_info)

image_url = track_info['album_image']
blurrer = ImageBlur(image_url)

blurrer.show_blur_image()
blurrer.show_unblurred_image()

audio_url = track_info['preview_url']


def shorten_audio_url(audio_url):
    response = requests.get(audio_url)
    audio_data = BytesIO(response.content)

    audio = AudioSegment.from_mp3(audio_data)
    play(audio[:2000])  # export it to shorten the audio file.


shorten_audio_url(audio_url)

#TODO: Get genre from third party API
#TODO:



