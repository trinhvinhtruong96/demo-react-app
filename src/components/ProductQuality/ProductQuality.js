import React from 'react';
import classes from './ProductQuality.module.css';
import Button from '../Button/Button';

function ProductQuality(props) {
    return (
        <div className={classes.ProductQuality}>
            <div className={classes.Comment}>
                <p>
                    たっぷりとしたフレアスリーブがフェミニンなきれいめカットソー半袖Tシャツ。動く度にゆれるお袖が女性らしさを演出します。スリットの程よい肌見せが夏にぴったりな抜け感をプラス。
                    【素材・サイズ感】素肌に着ても気持ちよいレーヨン混のカットソー素材。ボリュームのあるフレアスリーブが気になる二の腕をカバーし、縦に入ったスリットで細見えが叶います。無地でシンプルなのでどんなボトムスにも合わせやすく、デイリー使いにぴったりなトップスです。
                </p>
            </div>
            <div className={classes.Quality}>
                <p>
                    性別タイプ:
                    レディース
                </p>
                <p>
                    カテゴリー:
                    トップス>Tシャツ/カットソー
                </p>
                <p>
                    素材:
                    ポリエステル65%レーヨン30%ポリウレタン5%
                </p>
                <p>
                    即日配送:
                    即日配送可
                </p>
                <p>
                    送料:
                    購入金額に関わらず一律210円
                </p>
                <p>
                    ギフト:
                    ラッピング可
                </p>
                <p>
                    問い合わせ番号:
                    45225923（ZOZO）
                    C3927（店舗）
                </p>
            </div>
            <div className={classes.Link}>
                <Button type="RawBlue">返品について</Button>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Button type="RawBlue">ポイントについて</Button>
            </div>
        </div>
    );
}

export default ProductQuality;