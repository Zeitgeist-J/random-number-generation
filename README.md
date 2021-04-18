# Pseudo Random Number Generation

Models and simulations course. Pseudo random number generation programs

System requirements:
  - nodeJS. LTS is preferred
  - npm. 6 - 7

__Before running any funtion, you must run `npm install` o `npm i`__

This repo contains three functions to generate pseudo random numbers:

## 1. Central Squares

This function iterates taking the k central central number from the iteration's squeares, it can be ran by executing:

```bash
$ node cuadrados_centrales.js
```

### Params

| Param            | Importance | Type of value | Description                                                                                      |
| ---------------- | ---------- | ------------- | ------------------------------------------------------------------------------------------------ |
| seed   \|   s    | Mandatory  | number        | The seed value passed to the program, this will be used to create the first iteration            |
| k                | Mandatory  | number        | The number of numbers that will be taken from each iteration. Seed must be lower than 10^k       |
| stopWhenRepeated | Optional   | 1 \| 0        | This will set the variable that will stop the iterations when a result loop is found. Default 1. |
| maxIterations    | Optional   | number        | This will set the maximum iterations to the program. Default 100                                 |

#### Example

 ```bash
$ node cuadrados_centrales.js --seed 304 -k 3 --stopWhenRepeated 0 --maxIterations 150

$ node cuadrados_centrales.js -s 501 -k 3
 ```

## 2. Central Products

This function iterates taking k central numbers from the iteration's product, it can be ran by executing:

```bash
$ node productos_centrales.js
```

### Params

| Param            | Importance | Type of value | Description                                                                                      |
| ---------------- | ---------- | ------------- | ------------------------------------------------------------------------------------------------ |
| seed1            | Mandatory  | number        | The frist seed value passed to the program, this will be used to create the first iteration      |
| seed2            | Mandatory  | number        | The second seed value passed to the program, this will be used to create the first iteration     |
| k                | Mandatory  | number        | The number of numbers that will be taken from each iteration. Seed must be lower than 10^k       |
| stopWhenRepeated | Optional   | 1 \| 0        | This will set the variable that will stop the iterations when a result loop is found. Default 1. |
| maxIterations    | Optional   | number        | This will set the maximum iterations to the program. Default 50                                  |

#### Example

 ```bash
$ node productos_centrales.js --seed1 304 --seed 512 -k 3 --stopWhenRepeated 0 --maxIterations 150

$ node productos_centrales.js --seed1 501 --seed2 273 -k 3
 ```

## 3. Mix Congruential

This function iterates using the mix congruential method, it can be ran by executing:

```bash
$ node congruencial_mixto.js
```

### Params

| Param            | Importance | Type of value | Description                                                                                      |
| ---------------- | ---------- | ------------- | ------------------------------------------------------------------------------------------------ |
| seed             | Mandatory  | number        | The seed value passed to the program, this will be used to create the first iteration            |
| a                | Mandatory  | number        | The multiplicative constant for the iteration                                                    |
| c                | Mandatory  | number        | The additive constant for the iteration                                                          |
| m                | Mandatory  | number        | The number to take the module from                                                               |
| stopWhenRepeated | Optional   | 1 \| 0        | This will set the variable that will stop the iterations when a result loop is found. Default 1. |
| maxIterations    | Optional   | number        | This will set the maximum iterations to the program. Default 100                                 |

#### Example

 ```bash
$ node congruencial_mixto.js --seed 73 -a 65 -c 14 -m 92 --stopWhenRepeated 0 --maxIterations 150

$ node congruencial_mixto.js --seed 73 -a 65 -c 14 -m 92
 ```


Author: Nicolas Macias - Zeitgeist
