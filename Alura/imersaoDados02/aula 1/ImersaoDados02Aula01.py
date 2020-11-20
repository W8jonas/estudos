
# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
import pandas as pd

fonte = "https://github.com/alura-cursos/imersao-dados-2-2020/blob/master/MICRODADOS_ENEM_2019_SAMPLE_43278.csv?raw=true"

# Lendo banco de dados do ENEM 2019 (Amostra)
dados = pd.read_csv(fonte)
dados.shape


# %%
dados.head()


# %%
dados.columns.values


# %%
# Mostrando as 10 primeiras idades e seus totais de participantes em ordem crescente
dados[ "NU_IDADE"].value_counts().sort_index().head(10)

# %% [markdown]
# Desafio01: Encontrar os valores relativos para as idades dos incritos
# 
# Desafio02: Descobrir de quais estados são os inscritos com 13 anos.
# %% [markdown]
# Desafio03: Colocar título no gráfico

# %%
# Mostrando histograma das idades dos participantes
dados[ "NU_IDADE"].hist(bins = 50, figsize = (16, 7))


# %%
# Fazendo query no bando de dados para pegar somente observacoes de treineiros, depois mostrando o total das idades em ordem crescente
dados.query("IN_TREINEIRO == 1")["NU_IDADE"].value_counts().sort_index().head(5)

# %% [markdown]
# Desafio04: Plotar os histogramas das idades dos treineiros e não treineiros

# %%
# Plotando histograma das notas da redacao
dados["NU_NOTA_REDACAO"].hist(bins = 50, figsize=(19, 7))


# %%
# Plotando histograma das notas da prova de Ciências Humanas
dados["NU_NOTA_CH"].hist(bins = 50, figsize=(19, 7))


# %%
# Fazendo query no bando de dados para pegar somente observacoes do Estado de Minas
# Depois separando somente as notas das provas 
# Por fim mostrando dados estatísticos

provas = ["NU_NOTA_LC", "NU_NOTA_CH", "NU_NOTA_MT", "NU_NOTA_CN", "NU_NOTA_REDACAO"]
dados.query("SG_UF_RESIDENCIA == 'MG'")[provas].describe()


# %%
# Fazendo query no bando de dados para pegar somente observacoes do Estado de Minas
# Depois separando somente as notas das provas 
# Por fim plotando gráfico boxplot contendo as notas das provas

provas = ["NU_NOTA_LC", "NU_NOTA_CH", "NU_NOTA_MT", "NU_NOTA_CN", "NU_NOTA_REDACAO"]
dados.query("SG_UF_RESIDENCIA == 'MG'")[provas].boxplot(grid = 1, figsize=(18,8))

# %% [markdown]
# Desafio05: Comparar as distribuições das provas em inglês e espanhol nas provas de LC

# %%



