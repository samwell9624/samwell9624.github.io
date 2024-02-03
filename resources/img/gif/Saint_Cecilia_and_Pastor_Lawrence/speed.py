import os
import moviepy.editor as mp
from moviepy.editor import vfx

local_path = os.path.dirname(os.path.abspath(__file__))


def speed_up_gif(gif_path):
    # Open the gif
    clip = mp.VideoFileClip(gif_path)

    # Apply the speedx effect
    clip = clip.fx(vfx.speedx, 2)  # Double the speed

    # Write the result back to the file
    clip.write_gif(gif_path)


# Get all the gif files in the local path
gif_files = [f for f in os.listdir(local_path) if f.endswith('.gif')]

# Speed up all the gifs
for gif_file in gif_files:
    gif_path = os.path.join(local_path, gif_file)
    speed_up_gif(gif_path)
