# kanban-chat
kanban and chat tool  

## 環境構築
nodeはLTS(2018/09/23時点)版をinstallする。  
ソースコードcloneした後、  
package.jsonが置いてあるdirectoryで  
npm installする

### 動かしてみる
npm run build:dev後、
dist/index.htmlを開けばよいです。

serverを使う場合、
npm run start後、
localhost:3000/testにブラウザからアクセスする。
\#devtoolを入れて、hotreloadするので、serverを使ったほうがいいはず。
\#もしかしたらserverいらないかも。

## 技術
### frontend
#### 一旦  
webpack4 + vue
#### 今後
webpack4 + vue + typescript  
nuxt.js試してもいいかも。  
現状オーバーエンジニアリングなので  
難しいことをやろうとしてからがいいと思う。  
でもSSRにしたほうが考えること少なくて楽かも。  

### backend
#### 一旦
node + express
#### 今後
今後pythonかjavaかgoかscalaに置き換えるか  
frontendだけで完結するようなtoolにするか要検討
  
### 他 
reactでも書いてみようかしら,jsx試したい。

## ディレクトリ構成

### ./src
ソースコードをおく
### ./mock
サーバのモックをおく
### ./dist
build後のソースコードがおかれる