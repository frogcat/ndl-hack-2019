# ndl-hack-2019
Materials for NDL Hackathon 2019

# idea

地理情報分野では [地図タイル](https://maps.gsi.go.jp/development/siyou.html) という事実上の標準に沿ったデータセットが多数整備公開されていて、さまざまな地図アプリの基礎になっています。古地図もこの仕組みで多数整備されているのですが（たとえば [MapWarper](https://mapwarper.net/) , [NYPL MapWarper](http://maps.nypl.org/warper/), [日本版MapWarper](https://mapwarper.h-gis.jp/) など）、「この地図タイルの元になったリソースはこれ」とか「スキャン画像のこの座標に対してこの緯度経度を付与した」といった情報はきまったものがなく、また、いままでは適切なリンク先もありませんでした。

1. 「JapanSearch のリソース」と「地図タイルデータセット」をリンクするための手法(WebAnnotation/JSON-LD によるメタデータ記述)を検討し、実際にいくつかのリンクセットを整備してみます。また、リンクセットをもとに JapanSearch のメタデータと地図を合わせて表示したり、JapanSearch のリソースのバウンダリーを地図上で一覧表示したり、現在と過去の地図を比較表示したり、といったアプリを試作してみます。

2. 「地図画像上のポイント」に対して緯度経度を付与するための手法（WebAnnotation/JSON-LD によるメタデータ記述）を検討し、地図画像の発見～緯度経度の付与～地図タイルセット＋メタデータの生成＋公開、の一連の作業を実際にやってみます（支援アプリを準備します。特に地図画像としては JapanSearch からリンクされている IIIF を入力とすることを想定します）。整備されたデータは 1 のリンクセットの一部として、バウンダリー表示や比較表示などに応用できます。


このような仕組みを作ることで、JapanSearch のリソースから地図タイルデータセットを効率的に発見できたり、また、地図タイルから原典を指すのが容易になったりといった、効率化の効果が見込めます。また、「地図への緯度経度の付与」の方法を統一化することで、緯度経度の付与の間違いを修正したり、共同作業がしやすくなったりといった、今後にむけての品質向上の効果があるのではないかと考えています。

# simplified

## やりたいこと

JapanSearch と地図タイルのリンクセットを作る

## 効果

### 検索性の向上

- 地図タイルを発見しやすくなるので、古地図タイルで何かしたいと思っている人にとっては便利
- すでに地図タイルがあるのに、重複してジオリファレンスすることがなくなる
- ジオリファレンスされていない地図を発見してジオリファレンスする、の流れ（めざせジオリファレンス率100%）

### 地図側

- 地図のメタデータとして JapanSearch の情報を取得表示してリッチにできる
- この地図タイルと同じ場所で過去／未来の地図タイルを表示

### JapanSearch 側

- 地図側にはバウンディングボックス（緯度経度）やズームレベル(縮尺)といった固有のプロパティをもつことになるので、相互連携でよりデータが豊富に

### タイル化のメリット

- ふたつの地図の比較表示
- 古地図に現代の注記を載せてみたり
- 3D 表示なども

## 課題

- JapanSearch とタイルTemplate のペアをあつめる作業が必要
- ペアを WebAnnotaion を使ったメタデータとして記述する方法を考えたい
- iiif 画像をジオリファレンスしてタイルを作った場合の工程で、どんなメタデータを残すべきか考えたい
- それ以外にも単に興味のある地図画像がジオリファレンスされていなければ、やってみてほしい


# example

- [歴史的農業環境閲覧システム](https://habs.dc.affrc.go.jp/)
- [Japan Search 迅速測図](https://jpsearch.go.jp/csearch/jps-cross/?csid=jps-cross&from=0&keyword=%E8%BF%85%E9%80%9F%E6%B8%AC%E5%9B%B3)

# materials

- [Retroscope](http://frogcat.github.io/retroscope/)
- [Linked WebNDL Authorities (2015/11 WebNDL ハッカソン)](https://www.ndl.go.jp/jp/data/bib_newsletter/2017_2/article_01.html)
- [Linked WebNDL Authorities on GitHub](http://indigo-lab.github.io/ndlna/?00054222)

- [Yet Another Leaflet IIIF source](https://gist.github.com/frogcat/61a04c47e90652504999095ce46bf6cb)
- [Yet Another Leaflet IIIF Demo](https://bl.ocks.org/frogcat/61a04c47e90652504999095ce46bf6cb)

- [Hello Japan Search source](https://gist.github.com/frogcat/3a4bc7217d3ac4997e653ff5afd392f9)
- [Hello Japan Search Demo](https://bl.ocks.org/frogcat/3a4bc7217d3ac4997e653ff5afd392f9)

- [Georeferencer](https://frogcat.github.io/gr/#14/35.6175/139.6207)

# spec

- <https://www.w3.org/TR/annotation-model/>
- <https://github.com/mapbox/tilejson-spec>
- <https://iiif.io/api/image/2.1/>
- <https://www.w3.org/TR/annotation-vocab/>
