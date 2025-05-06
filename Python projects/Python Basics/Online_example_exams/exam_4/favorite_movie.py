movie_title = str(input())
number_movies = 0
max_movies_reached = False
max_rating_movie = 0
movie_to_watch = ''

while movie_title != 'STOP' and not max_movies_reached:
    number_movies += 1
    rating_movie = 0
    for letters in movie_title:
        if 97 <= ord(letters) <= 122:
            rating_movie += ord(letters) - 2 * len(movie_title)
        elif 65 <= ord(letters) <= 90:
            rating_movie += ord(letters) - len(movie_title)
        else:
            rating_movie += ord(letters)
    if max_rating_movie < rating_movie:
        max_rating_movie = rating_movie
        movie_to_watch = movie_title
    if number_movies == 7:
        max_movies_reached = True
        continue
    movie_title = str(input())
if max_movies_reached:
    print(f"The limit is reached.")
print(f"The best movie for you is {movie_to_watch} with {max_rating_movie} ASCII sum.")
