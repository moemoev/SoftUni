import sys

number_movies = int(input())
average_rating = 0.0
max_rating = -sys.maxsize
min_rating = sys.maxsize
max_movie = ''
min_movie = ''

for movie in range(number_movies):
    name_movie = str(input())
    rating_movie = float(input())
    if rating_movie < min_rating:
        min_rating = rating_movie
        min_movie = name_movie
    if rating_movie > max_rating:
        max_rating = rating_movie
        max_movie = name_movie
    average_rating += rating_movie

print(f"{max_movie} is with highest rating: {max_rating:.1f}")
print(f"{min_movie} is with lowest rating: {min_rating:.1f}")
print(f"Average rating: {average_rating / number_movies :.1f}")
