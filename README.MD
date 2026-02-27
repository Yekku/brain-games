# Brain Games

[![Maintainability](https://api.codeclimate.com/v1/badges/b1e9bd640f2e55af04eb/maintainability)](https://codeclimate.com/github/Yekku/brain-games/maintainability)

**Welcome to the First Brain Games!**

A terminal game that consists of different maths tasks.

## Requirements

Node.js >= 18.0.0

## Installation

```bash
npm i -g first-brain-games
```

## Available Games

1. brain-even
2. brain-calc
3. brain-gcd
4. brain-balance
5. brain-progression
6. brain-prime

You can call the menu via `brain-game` or `npm start`.

To immediately start a specific game without the menu, use its name directly (e.g. `brain-even`).

### Development

```bash
make install          # Install dependencies
make lint             # Run ESLint
make start            # Launch main menu
make start-even       # Launch even game
make start-calc       # Launch calc game
make start-gcd        # Launch gcd game
make start-balance    # Launch balance game
make start-progression # Launch progression game
make start-prime      # Launch prime game
make publish          # Publish to npm
```

[![asciicast](https://asciinema.org/a/GMjVDk786l7qQDlKyLPEwnSKM.png)](https://asciinema.org/a/GMjVDk786l7qQDlKyLPEwnSKM)

## Games

- **Even game** — Answer if a number is even or not.

  ```bash
  brain-even
  ```

  [![asciicast](https://asciinema.org/a/qtzuXirD7yFfUMd2jlKDJ59tB.png)](https://asciinema.org/a/qtzuXirD7yFfUMd2jlKDJ59tB)

- **Calc game** — What is the result of the expression?

  ```bash
  brain-calc
  ```

  [![asciicast](https://asciinema.org/a/sssPi4viHHdARkqLc4MZzPsOx.png)](https://asciinema.org/a/sssPi4viHHdARkqLc4MZzPsOx)

- **GCD game** — Find the greatest common divisor of given numbers.

  ```bash
  brain-gcd
  ```

  [![asciicast](https://asciinema.org/a/AZPAbko7WTKqiHmwdBeCuJtVH.png)](https://asciinema.org/a/AZPAbko7WTKqiHmwdBeCuJtVH)

- **Balance game** — Balance the given number.

  ```bash
  brain-balance
  ```

  [![asciicast](https://asciinema.org/a/geiEB0H9uSpnbsdzjUWiuu3F0.png)](https://asciinema.org/a/geiEB0H9uSpnbsdzjUWiuu3F0)

- **Progression game** — What number is missing in this progression?

  ```bash
  brain-progression
  ```

  [![asciicast](https://asciinema.org/a/lHsar1XgyqdyLJ8KMXEDAy1Ky.png)](https://asciinema.org/a/lHsar1XgyqdyLJ8KMXEDAy1Ky)

- **Prime game** — Is this number prime?

  A number n is prime if it is greater than 1 and has no positive divisors except 1 and n.

  ```bash
  brain-prime
  ```

  [![asciicast](https://asciinema.org/a/cE13o3DioXg0zMCyQR5mXOZoT.png)](https://asciinema.org/a/cE13o3DioXg0zMCyQR5mXOZoT)
