import pandas as pd
import numpy as np
import json


#exemplo path = '/home/romulo/Documents/nasa_app/timeline.json', variavel 'deaths' ,'/home/romulo/Documents/nasa_app/', china
def f_plot(path, variavel, path_imagem, nome_lugar):
    
    with open(path) as json_file:

        data = json.load(json_file)

    lst_keys = list(data['data'][0].keys())

    lst_keys = lst_keys[:-1]

    lst_keys

    index = []

    for i in range(0, len(data['data'])):

        index.append(i)

    df = pd.DataFrame(index = index, columns = lst_keys)


    #para cada linha
    for i in range(len(data['data'])):

        #para cada coluna
        for j in range(len(lst_keys)):

            df.iloc[i].iloc[j] = data['data'][i][df.columns[j]]

    #revertendo o df
    df = df.iloc[::-1]

    #parte do plot
    import matplotlib.pyplot as plt


    #ax = df['deaths'].plot(figsize=(20,10), title = 'Cteste').legend(bbox_to_anchor=(1, 1))


    df.plot(x="date", y= variavel, figsize=(10,7), title = variavel)

    plt.show()
    
    
    plt.savefig(path_imagem + '/' + variavel + '_' + nome_lugar + '.jpg')