
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
provas_entra = ["NU_NOTA_CH", "NU_NOTA_LC", "NU_NOTA_CN", "NU_NOTA_REDACAO"]
prova_saida = "NU_NOTA_MT"

dados_sem_nan = dados_sem_zeros[provas].dropna()

notas_entra = dados_sem_nan[provas_entra]
notas_saida = dados_sem_nan[prova_saida]


# %%
notas_entra


# %%
x = notas_entra
y = notas_saida


# %%
from sklearn.model_selection import train_test_split
SEED = 4321
x_treino, x_teste, y_treino, y_teste = train_test_split(x, y, test_size = 0.25, random_state = SEED)


# %%
x_treino.head()


# %%
from sklearn.svm import LinearSVR

modelo = LinearSVR(random_state = SEED)

modelo.fit(x_treino, y_treino)


# %%
predicoes_nota_mt = modelo.predict(x_teste)
predicoes_nota_mt[:5]


# %%
y_teste[:5]


# %%
plt.figure(figsize=(18, 8))
sns.scatterplot(x=predicoes_nota_mt, y=y_teste)
plt.xlim((-50, 1050))
plt.xlim((-50, 1050))


# %%
plt.figure(figsize=(18, 8))
sns.scatterplot(x=y_teste, y=y_teste - predicoes_nota_mt)
plt.xlim((1, 1050))
plt.xlim((1, 1050))


# %%
resultados = pd.DataFrame()

resultados["real"] = y_teste
resultados["previsao"] = predicoes_nota_mt
resultados["diferenca"] = resultados["real"] - resultados["previsao"]
resultados["diferenca quad"] = (resultados["real"] - resultados["previsao"])**2
resultados["diferenca abs"] = abs(resultados["real"] - resultados["previsao"])

resultados


# %%
resultados["diferenca quad"].mean()**(1/2)


# %%
resultados["diferenca abs"].mean()


# %%
from sklearn.dummy import DummyRegressor

modelo_dummy = DummyRegressor()
modelo_dummy.fit(x_treino, y_treino)

dummy_predicoes = modelo_dummy.predict(y_teste)


# %%
from sklearn.metrics import mean_squared_error

mean_squared_error(y_teste, dummy_predicoes)**(1/2)


# %%
mean_squared_error(y_teste, predicoes_nota_mt)**(1/2)

# %% [markdown]
# Desafio: Procurar outros modelos de ML para treinar e compara com os modelos criados em aula.
# 
# Desafio 02: Ler a documentação do Dymmt e alterar o método de regressão.
# 
# Desafio 03: Buscar outras métricas para avaliar modelos de regressão.

# %%



