
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
# Mostrando a 10 primeiras idades e seus totais de participantes em ordem crescente
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
# Por fim plotando grafico boxplot contendo as notas das provas

provas = ["NU_NOTA_LC", "NU_NOTA_CH", "NU_NOTA_MT", "NU_NOTA_CN", "NU_NOTA_REDACAO"]
dados.query("SG_UF_RESIDENCIA == 'MG'")[provas].boxplot(grid = 1, figsize=(18,8))

# %% [markdown]
# Desafio05: Comparar as distribuições das provas em inglês e espanhol nas provas de LC

# %%

#Resolvendo desafio 01

dados.query("NU_IDADE <= 14")["SG_UF_RESIDENCIA"].value_counts(normalize=True)


# %%
renda_ordenada = dados["Q006"].unique()
renda_ordenada.sort()
print(renda_ordenada)


# %%
import seaborn as sns
import matplotlib.pyplot as plt

plt.figure(figsize=(18, 8))
sns.boxplot(x="Q006", y = "NU_NOTA_REDACAO", data = dados, order = renda_ordenada)
plt.title("Boxplot das notas de matemática pela renda")


# %%
total_notas_por_aluno = dados[provas].sum(axis=1)
dados["NU_NOTA_TOTAL"] = total_notas_por_aluno
dados.head()


# %%
plt.figure(figsize=(18, 8))
dados_sem_zeros = dados.query("NU_NOTA_TOTAL != 0")
sns.boxplot(x="Q006", y = "NU_NOTA_TOTAL", data = dados_sem_zeros, order = renda_ordenada)
plt.title("Boxplot das notas todais pela renda")


# %%
sns.displot(dados, x = "NU_NOTA_TOTAL")


# %%
plt.figure(figsize=(18, 8))
sns.boxplot(x="Q006", y = "NU_NOTA_TOTAL", data = dados_sem_zeros, order = renda_ordenada, hue= "IN_TREINEIRO")
plt.title("Boxplot das notas todais pela renda")


# %%
plt.figure(figsize=(18, 8))
sns.histplot(dados_sem_zeros, x = "NU_NOTA_TOTAL")


# %%
plt.figure(figsize=(8, 8))
sns.scatterplot(data = dados_sem_zeros, x="NU_NOTA_MT", y="NU_NOTA_LC")
plt.xlim((-50, 1050))
plt.ylim((-50, 1050))


# %%
correlacao = dados_sem_zeros[provas].corr()
correlacao


# %%
sns.pairplot(dados_sem_zeros[provas])


# %%
sns.heatmap(correlacao, cmap="Greens", annot=True)


# %%



