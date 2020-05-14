import React from 'react';

const Header = () => (
  <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
    <div className="col-md-12 px-0" style={{ textAlign: 'center' }}>
      <h1 className="display-4 font-italic">Mert Ayhan</h1>
      <p className="lead my-3">27.12.1997 tarihinde Muğla’nın Marmaris ilçesinde doğdu.</p>
      <p className="lead my-3">Başkent Üniversitesi Yönetim Bilişim Sistemleri bölümü mezunu</p>
      <p className="lead my-3">Html, Css, JavaScript, React bilgisi sahip</p>
      <p className="lead mb-0">
        <p className="lead mb-0">
          <a href="https://www.linkedin.com/in/mert-ayhan-764415152/" className="text-white font-weight-bold">Likedin</a>
          &nbsp;&nbsp;
          <a href="https://www.instagram.com/merttayhann" className="text-white font-weight-bold">Instagram</a>
        </p>
      </p>
    </div>
  </div>
);

export default Header;
