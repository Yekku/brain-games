# Brain Games

[![CI](https://github.com/Yekku/brain-games/actions/workflows/ci.yml/badge.svg)](https://github.com/Yekku/brain-games/actions/workflows/ci.yml)
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
7. brain-fibonacci
8. brain-sqrt
9. brain-binary

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
make start-fibonacci  # Launch fibonacci game
make start-sqrt       # Launch sqrt game
make start-binary     # Launch binary game
make publish          # Publish to npm
```

[![asciicast](https://asciinema.org/a/GMjVDk786l7qQDlKyLPEwnSKM.png)](https://asciinema.org/a/GMjVDk786l7qQDlKyLPEwnSKM)

## Games

- **Even game** — You are shown a random number. Answer `yes` if it is even, `no` if it is odd.

  ```bash
  brain-even
  ```

  [![asciicast](https://asciinema.org/a/qtzuXirD7yFfUMd2jlKDJ59tB.png)](https://asciinema.org/a/qtzuXirD7yFfUMd2jlKDJ59tB)

- **Calc game** — Solve a random arithmetic expression using `+`, `-`, or `*`. Type the result.

  ```bash
  brain-calc
  ```

  [![asciicast](https://asciinema.org/a/sssPi4viHHdARkqLc4MZzPsOx.png)](https://asciinema.org/a/sssPi4viHHdARkqLc4MZzPsOx)

- **GCD game** — Two numbers are shown. Find their greatest common divisor.

  ```bash
  brain-gcd
  ```

  [![asciicast](https://asciinema.org/a/AZPAbko7WTKqiHmwdBeCuJtVH.png)](https://asciinema.org/a/AZPAbko7WTKqiHmwdBeCuJtVH)

- **Balance game** — Rearrange the digits of a number so that the difference between the largest and smallest digit is at most 1.

  ```bash
  brain-balance
  ```

  [![asciicast](https://asciinema.org/a/geiEB0H9uSpnbsdzjUWiuu3F0.png)](https://asciinema.org/a/geiEB0H9uSpnbsdzjUWiuu3F0)

- **Progression game** — An arithmetic sequence is shown with one number replaced by `..`. Find the missing number.

  ```bash
  brain-progression
  ```

  [![asciicast](https://asciinema.org/a/lHsar1XgyqdyLJ8KMXEDAy1Ky.png)](https://asciinema.org/a/lHsar1XgyqdyLJ8KMXEDAy1Ky)

- **Prime game** — You are shown a number. Answer `yes` if it is prime, `no` otherwise. A prime number is greater than 1 and divisible only by 1 and itself.

  ```bash
  brain-prime
  ```

  [![asciicast](https://asciinema.org/a/cE13o3DioXg0zMCyQR5mXOZoT.png)](https://asciinema.org/a/cE13o3DioXg0zMCyQR5mXOZoT)

- **Fibonacci game** — You are shown a number. Answer `yes` if it belongs to the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21, ...), `no` otherwise.

  ```bash
  brain-fibonacci
  ```

- **Square root game** — You are shown a perfect square. Find its integer square root.

  ```bash
  brain-sqrt
  ```

- **Binary game** — You are shown a decimal number. Convert it to its binary representation.

  ```bash
  brain-binary
  ```
