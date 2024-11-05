import itertools
import string


def brute_force_password(target_password):
    characters = string.ascii_letters + string.digits

    for password_length in range(1, 9):

        for guess in itertools.product(characters, repeat=password_length):
            guess_password = ''.join(guess)
            print(guess_password)

            #Hier fehlt ein Codestück, es ist entscheidend für die Funktionalität

    return None


target_password = "a31dx"

found_password = brute_force_password(target_password)

if found_password:
    print(f"Passwort gefunden: {found_password}")
else:
    print("Passwort nicht gefunden.")
