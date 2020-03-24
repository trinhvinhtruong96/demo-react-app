import React from 'react';
import classes from './Footer.module.css';
import Button from '../Button/Button';

function Footer(props) {
    return (
        <div className={classes.Footer}>
            <div className={classes.Footerr}>
                <div className={classes.Footer1}>
                    <Button type="Raw">
                        コーポレートサイト会社概要IR情報採用情報利用規約プライバシーポリシー特定商取引法に基づく表示・古物営業法に基づく表示
                        コーポレートサイト会社概要IR情報採用情報利用規約プライバシーポリシー特定商取引法に基づく表示・古物営業法に基づく表示
                </Button>
                </div>
                <div className={classes.Footer2}>
                    <Button type="Raw">
                        コーポレートサイト会社概要IR情報採用情報利用規約プライバシーポリシー特定商取引法に基づく表示・古物営業法に基づく表示
                        コーポレートサイト会社概要IR情報採用情報利用規約プライバシーポリシー特定商取引法に基づく表示・古物営業法に基づく表示
                </Button>
                </div>
                <div className={classes.Footer3}>
                    <Button type="Raw">
                        © ZOZO, Inc.
                </Button>
                </div>
            </div>
        </div>
    );
}

export default Footer;