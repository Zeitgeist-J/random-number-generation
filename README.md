# random-number-generation

Models and simulations class, random number generation programs

This repo contains three functions to generate random numbers:

## 1. Central Squares

This function iterates taking the central squeares, it can be run by executing:

```bash
node cuadrados_centrales.js
```

### Params

Param           | Importance | Type of value | Description                                                                              |
----------------|------------|---------------|------------------------------------------------------------------------------------------|
seed(s)         |  Mandatory |   number      |The seed value passed to the program, this will be used to create the first iteration     |
k               |  Mandatory |   number      |The number of numbers that will be taked from each iteration. Seed must be lower than 10^k|
stopWhenRepeated|  Optional  |   1 - 0       |This will set the variable that will stop the iterations when a loop is found. Default 1. |
maxIterations   |  Optional  |   number      |This will set the maximum iterations to the program. Default 100

#### Example

 ```bash
node cuadrados_centrales --seed 304 -k 3 --stopWhenRepeated 0 --maxIterations 150

node cuadrados_centrales -s 501 -k 3
 ```
