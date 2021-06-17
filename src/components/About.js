import React, { Component } from 'react';
import '../styles/About.css';
import Header from './Header';

class About extends Component {
  render() {
    const myProfileCover = {
      backgroundImage: `url(https://github.com/m-star18/myportfoliosite/blob/master/src/assets/background.jpg?raw=true)`
    }
    const myProfileIcon = {
      backgroundImage: `url(https://github.com/m-star18/myportfoliosite/blob/master/src/assets/%E7%8A%AC.png?raw=true)`
    }
    return (
      <div className="uc-section _center">
        <div className="uc-section-title">About</div>
        <p>Hi!</p>
        <div className="uc-grid-unit">
          <div className="uc-grid">
            <div className="uc-card">
              <div className="uc-card-image" style={myProfileCover}/>
              <div className="uc-card-header">
                <div className="uc-card-icon" style={myProfileIcon}/>
                <div className="uc-card-title">Ryusei Ito (m-star18)</div>
              </div>
              <div className="uc-card-body">
                <p>生年月日: 2003年1月11日<br />
                   所属: 豊田工業高等専門学校<br />
                   学科: 情報工学科<br />
                   学年: 4<br />
                   研究室: 東京大学 松尾研究室</p>
                <p>経歴:<br />
                   2021年6月〜 株式会社松尾研究所 長期インターン<br />
                   2021年3月〜 株式会社AVILEN 長期インターン<br />
                   2020年8月〜 株式会社エムケイシステム 開発アルバイト<br />
                   2018年4月〜 国立豊田工業高等専門学校入学</p>
                <p>Skills:<br />
                   Python(Pytorch, scikit-learn, Django, Flask),<br />
                   Rust, C, Assembly, Ruby,<br />
                   Javascript(React, jQuery), HTML, CSS,<br />
                   Docker, Kubernetes, GCP,<br />
                   SQL(MySQL, MariaDB),<br />
                   Linux(CentOS, Arch Linux, Ubuntu, Mint),</p>
              </div>
              <div className="uc-card-footer uc-grid _col-5 _small-col-3">
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://twitter.com/masutango18" target="_blank"><i className="fa fa-twitter"/></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://github.com/m-star18" target="_blank"><i className="fa fa-github"/></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="https://www.instagram.com/ryusei__0111/" target="_blank"><i className="fa fa-instagram"/></a></div>
                </div>
                <div className="uc-grid-cell">
                  <div className="uc-btn _icon"><a href="mailto:31807@toyota.kosen-ac.jp"><i className="fa fa-envelope"/></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uc-btn-unit">
          <button className="uc-btn" onClick={this.props.handleCloseModal}><span>Close</span></button>
        </div>
      </div>
    );
  }
}

export default About;
