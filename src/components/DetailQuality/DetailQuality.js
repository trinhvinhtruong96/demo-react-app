import React from 'react';
import classes from './DetailQuality.module.css';
import Button from '../Button/Button';

function DetailQuality(props) {
    return (
        <div className={classes.DetailQuality}>
            <div className={classes.TableData}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td>94</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={classes.TextData}>
                ※ZOZOTOWN独自の方法により採寸しております。
                ※（）内の表示はZOZOTOWN独自の基準で振り分けたサイズです。ブランド表記サイズとは異なりますのでご注意ください。
            </div>
            <div className={classes.Link}>
                <Button type="RawBlue">返品について</Button>&nbsp;&nbsp;|&nbsp;&nbsp;
            </div>
        </div>
    );
}

export default DetailQuality;