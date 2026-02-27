help:
	@echo "Available commands:"
	@echo "  make install           Install dependencies"
	@echo "  make lint              Run ESLint"
	@echo "  make start             Launch main menu"
	@echo "  make start-even        Launch even game"
	@echo "  make start-calc        Launch calc game"
	@echo "  make start-gcd         Launch gcd game"
	@echo "  make start-balance     Launch balance game"
	@echo "  make start-progression Launch progression game"
	@echo "  make start-prime       Launch prime game"
	@echo "  make start-fibonacci   Launch fibonacci game"
	@echo "  make start-sqrt        Launch sqrt game"
	@echo "  make start-binary      Launch binary game"
	@echo "  make publish           Publish to npm"

install:
	npm install

publish:
	npm publish

lint:
	npx eslint .

start:
	node src/bin/brain-game.js

start-even:
	node src/bin/brain-even.js

start-calc:
	node src/bin/brain-calc.js

start-gcd:
	node src/bin/brain-gcd.js

start-balance:
	node src/bin/brain-balance.js

start-progression:
	node src/bin/brain-progression.js

start-prime:
	node src/bin/brain-prime.js

start-fibonacci:
	node src/bin/brain-fibonacci.js

start-sqrt:
	node src/bin/brain-sqrt.js

start-binary:
	node src/bin/brain-binary.js

.PHONY: help install publish lint start start-even start-calc start-gcd start-balance start-progression start-prime start-fibonacci start-sqrt start-binary
.DEFAULT_GOAL := help
