import time
import simpleaudio as sa


filename = 'chime_up.wav'
wave_obj = sa.WaveObject.from_wave_file(filename)


print('Imput timer duration in Minutes:')



max_time =float(input())*60
print('Max time:', max_time)
start = time.time() 
elapsed =0;

while elapsed < max_time:
	now =time.time()
	elapsed = now  - start
	print(elapsed)
if elapsed > max_time:
	for muff in range(3):
		play_obj = wave_obj.play()
		play_obj.wait_done() # Wait until sound has finished playing
		print('Timer !', muff)	
	print('Muffins Done!')




	
